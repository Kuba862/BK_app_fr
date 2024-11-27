import React, { useState, useEffect } from 'react';
import { useParams, Link as L, useSearchParams } from 'react-router-dom';
import { useEditor, EditorContent } from '@tiptap/react';
import Document from '@tiptap/extension-document';
import { EditorView } from '@tiptap/pm/view';
import { Extension, Node } from '@tiptap/core';
import StarterKit from '@tiptap/starter-kit';
import History from '@tiptap/extension-history';
import Link from '@tiptap/extension-link';
import Image from '@tiptap/extension-image';
import Underline from '@tiptap/extension-underline';
import Color from '@tiptap/extension-color';
import Highlight from '@tiptap/extension-highlight';
import Paragraph from '@tiptap/extension-paragraph';
import Text from '@tiptap/extension-text';
import TextStyle from '@tiptap/extension-text-style';
import Blockquote from '@tiptap/extension-blockquote';
import BulletList from '@tiptap/extension-bullet-list';
import ListItem from '@tiptap/extension-list-item';
import HardBreak from '@tiptap/extension-hard-break';
import Heading from '@tiptap/extension-heading';
import HorizontalRule from '@tiptap/extension-horizontal-rule';
import Dropcursor from '@tiptap/extension-dropcursor';
import OrderedList from '@tiptap/extension-ordered-list';
import Gapcursor from '@tiptap/extension-gapcursor';
import Table from '@tiptap/extension-table';
import TableCell from '@tiptap/extension-table-cell';
import TableHeader from '@tiptap/extension-table-header';
import TableRow from '@tiptap/extension-table-row';
import Youtube from '@tiptap/extension-youtube';
import Toolbar from './Toolbar';
import '../../style/style.css';
import axios from 'axios';
import { PresentationTitleInput, MessageContainer } from '../../style/textEditor';
import { GradientButton } from '../../style/Button';
import '../../style/textEditor.css';

const CustomParagraph = Paragraph.extend({
  addAttributes() {
    return {
      ...this.parent?.(),
      class: {
        default: 'inline-paragraph',
      },
    }
  },
});

const CustomKeymap = Extension.create({
  name: 'customKeymap',
  addKeyboardShortcuts() {
    return {
      Enter: ({ editor }) => {
        editor.commands.splitBlock();
        return true;
      },
    };
  },
});

const CustomImage = Image.extend({
  name: 'customImage',
  inline: true,
  group: 'inline',
  draggable: true,
  selectable: true,
  atom: true,
  addOptions() {
    return {
      ...this.parent?.(),
      allowBase64: true,
      inline: true,
    }
  },
  addAttributes() {
    return {
      ...this.parent?.(),
      src: {
        default: null,
        parseHTML: element => element.getAttribute('src'),
      },
      alt: {
        default: null,
        parseHTML: element => element.getAttribute('alt'),
      },
      title: {
        default: null,
        parseHTML: element => element.getAttribute('title'),
      },
      class: {
        default: 'resizable-image inline-image',
      },
    }
  },
});


const KeyboardHandling = Extension.create({
  name: 'keyboardHandling',
  addKeyboardShortcuts() {
    return {
      Space: ({ editor }) => {
        const { selection } = editor.state;
        const node = editor.state.doc.nodeAt(selection.from);
        
        if (node?.type.name === 'customImage') {
          const pos = selection.from;
          editor.view.dispatch(
            editor.state.tr.insertText(' ', pos)
          );
          return true;
        }
        return false;
      },
      Tab: ({ editor }) => {
        const { selection } = editor.state;
        const node = editor.state.doc.nodeAt(selection.from);
        
        if (node?.type.name === 'customImage') {
          const pos = selection.from;
          editor.view.dispatch(
            editor.state.tr.insertText('\t', pos)
          );
          return true;
        }
        return false;
      },
    };
  },
});


const TextEditor = () => {
  const { id } = useParams();
  const [searchParams] = useSearchParams();
  const presentationID = searchParams.get('presentationID');
  const [presentationTitle, setPresentationTitle] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isEditing, setIsEditing] = useState<boolean>(false);

  const extractImagesFromContent = (content: string) => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(content, 'text/html');
    const images = Array.from(doc.querySelectorAll('img'));

    return images.map((img) => ({
      base64: img.src,
      filename: img.getAttribute('data-filename'),
      filetype: img.getAttribute('data-filetype'),
    }));
  };

  const getAuthToken = () => {
    return localStorage.getItem('token');
  }

  const uploadImages = async (images: any[]) => {
    const uploadedImages = await Promise.all(
      images.map(async (img) => {
        const formData = new FormData();
        const response = await fetch(img.base64);
        const blob = await response.blob();
        formData.append('image', blob, img.filename);

        try {
          let currentPresentationId = presentationID;
          
          if (!currentPresentationId) {
            const saveResponse = await axios.post(
              `${process.env.REACT_APP_BE_API_URL}/api/presentation/save-presentation`,
              {
                content: editor?.getHTML(),
                title: presentationTitle,
                author: id
              },
              {
                headers: {
                  'x-auth-token': getAuthToken(),
                }
              }
            );
            currentPresentationId = saveResponse.data.data._id;
            setIsEditing(true);
          }

          const res = await axios.post(
            `${process.env.REACT_APP_BE_API_URL}/api/presentation/${currentPresentationId}/upload-image`,
            formData,
            {
              headers: {
                'Content-Type': 'multipart/form-data',
                'x-auth-token': getAuthToken(),
              },
            }
          );

          return {
            originalSrc: img.base64,
            newSrc: `${process.env.REACT_APP_BE_API_URL}${res.data.data.path}`
          };
        } catch (err) {
          console.error('Błąd podczas uploadowania zdjęcia:', err);
          return null;
        }
      })
    );
    return uploadedImages.filter((img) => img !== null);
  };

  const replaceImagesInContent = (content: string, imageMap: any[]) => {
    let newContent = content;
    imageMap.forEach((img) => {
      newContent = newContent.replace(img.originalSrc, img.newSrc);
    });
    return newContent;
  };

  useEffect(() => {
    const fetchPresentation = async () => {
      if (presentationID) {
        setIsLoading(true);
        try {
          const baseUrl = `${process.env.REACT_APP_BE_API_URL}${process.env.REACT_APP_BE_PRESENTATION_EDIT_ENDPOINT}`;
          const res = await axios.get(`${baseUrl}/${presentationID}`, {
            headers: {
              'x-auth-token': getAuthToken(),
            }
          });
          setPresentationTitle(res.data.data.title);
          editor?.commands.setContent(res.data.data.content);
          setIsEditing(true);
        } catch (err) {
          console.log(err);
          setMessage('Nie udało się załadować prezentacji');
        } finally {
          setIsLoading(false);
        }
      }
    };
    fetchPresentation();
  }, []);

  const handleSavePresentation = async () => {
    if (!presentationTitle.trim()) {
      setMessage('Nie można zapisać prezentacji bez nazwy');
      return;
    }
    setIsLoading(true);

    try {
      const content = editor?.getHTML() ?? '';
      const images = extractImagesFromContent(content);
      let finalContent = content;

      if (images.length > 0) {
        const uploadedImages = await uploadImages(images);
        if (uploadedImages.length > 0) {
          finalContent = replaceImagesInContent(content, uploadedImages);
        }
      }

      const endpoint = isEditing ? 
        `/api/presentation/update-presentation/${presentationID}` : 
        '/api/presentation/save-presentation';

      const response = await axios[isEditing ? 'put' : 'post'](
        `${process.env.REACT_APP_BE_API_URL}${endpoint}`,
        {
          content: finalContent,
          title: presentationTitle,
          author: id,
        }, 
        {
          headers: {
            'x-auth-token': getAuthToken(),
          },
        }
      );

      if (response.status === 200 || response.status === 201) {
        setMessage('Prezentacja została zapisana. Możesz ją znaleźć ');
        if (!isEditing) {
          setIsEditing(true);
          const newPresentationId = response.data.data._id;
          window.history.replaceState(
            null, 
            '', 
            `/add-presentation/${id}/?presentationID=${newPresentationId}`
          );
        }
      }
    } catch (err) {
      console.error('Szczegóły błędu:', err);
      setMessage('Wystąpił błąd podczas zapisywania prezentacji');
    } finally {
      setIsLoading(false);
    }
  };

  const editor = useEditor({
    extensions: [
      Document,
      Text,
      History,
      CustomParagraph,
      CustomImage.configure({
        allowBase64: true,
        HTMLAttributes: {
          class: 'resizable-image inline-image',
          draggable: 'true',
          contenteditable: 'true',
        },
      }),
      KeyboardHandling,
      CustomKeymap,
      Link.configure({
        openOnClick: true,
      }),
      TextStyle,
      Highlight.configure({ multicolor: true }),
      Underline,
      Color,
      Blockquote,
      BulletList,
      OrderedList,
      ListItem,
      HardBreak.configure({
        keepMarks: true,
        HTMLAttributes: {
          class: 'hard-break',
        },
      }),
      Heading.configure({ levels: [1, 2, 3, 4, 5, 6] }),
      HorizontalRule,
      Dropcursor.configure({
        class: 'drop-cursor',
      }),
      Gapcursor,
      Table.configure({
        resizable: true,
        HTMLAttributes: {
          class: 'table',
        },
      }),
      TableRow,
      TableHeader,
      TableCell,
      Youtube.configure({
        controls: true,
        nocookie: true,
      }),
    ],
    content: '',
    editorProps: {
      attributes: {
        spellcheck: 'false',
        class: 'text-editor',
        style: 'color: black',
      },
    },
  });

  if (!editor) return null;

  return (
    <div
      style={{
        marginBlockStart: '1em',
        marginBlockEnd: '1em',
        marginInlineStart: '1em',
        marginInlineEnd: '1em',
      }}
    >
      <PresentationTitleInput
        type="text"
        value={presentationTitle}
        onChange={(e) => setPresentationTitle(e.target.value)}
        placeholder="Nazwa prezentacji"
        required
      />
      <div>
        <Toolbar editor={editor} />
      </div>
      <EditorContent editor={editor} className="editor_content" />
      <GradientButton onClick={handleSavePresentation} disabled={isLoading}>
        {isLoading ? 'Zapisywanie...' : 'Zapisz prezentację'}
      </GradientButton>
      {message && (
        <MessageContainer
          success={message.includes('pomyślnie')}
          onClick={() => setMessage('')}
        >
          {message} <L to={`/presentations/${id}`}>tu</L>
        </MessageContainer>
      )}
    </div>
  );
};

export default TextEditor;