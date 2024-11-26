import React, { useState } from 'react';
import { useParams, Link as L } from 'react-router-dom';
import { useEditor, EditorContent, BubbleMenu } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Link from '@tiptap/extension-link';
import Image from '@tiptap/extension-image';
import Underline from '@tiptap/extension-underline';
import Color from '@tiptap/extension-color';
import Document from '@tiptap/extension-document';
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

const TextEditor = () => {
  const { id } = useParams();
  const [presentationTitle, setPresentationTitle] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const resetEditor = () => {
    setPresentationTitle('');
    editor?.commands.clearContent();
    setMessage('Prezentacja została zapisana. Możesz ją znaleźć ');
  };

  const handleSavePresentation = async () => {
    if (!presentationTitle.trim()) {
      setMessage('Nie można zapisać prezentacji bez nazwy');
      return;
    }
    setIsLoading(true);

    try {
      const response = await axios.post(
        `${process.env.REACT_APP_BE_API_URL}${process.env.REACT_APP_BE_PRESENTATION_ENDPOINT}`,
        {
          content: editor?.getHTML(),
          title: presentationTitle,
          author: id,
        }
      );
      if (response.status === 200 || response.status === 201) {
        resetEditor();
      }
    } catch (err) {
      setMessage('Wystąpił błąd podczas zapisywania prezentacji');
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };

  const editor = useEditor({
    extensions: [
      StarterKit,
      Link.configure({
        openOnClick: true,
      }),
      Paragraph,
      Text,
      TextStyle,
      Highlight.configure({ multicolor: true }),
      Image,
      Underline,
      Color,
      Blockquote,
      BulletList,
      OrderedList,
      ListItem,
      HardBreak,
      Heading.configure({ levels: [1, 2, 3, 4, 5, 6] }),
      HorizontalRule,
      Image.configure({
        allowBase64: true,
        HTMLAttributes: {
          class: 'my-custom-class',
        },
      }),
      Dropcursor,
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
        <MessageContainer success={message.includes('pomyślnie')} onClick={() => setMessage('')} >
          {message} <L to={`/presentations/${id}`} >tu</L>
        </MessageContainer>
      )}
    </div>
  );
};

export default TextEditor;
