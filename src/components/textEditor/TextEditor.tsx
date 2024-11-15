import React, { useState, useEffect } from 'react';
import { useEditor, EditorContent, BubbleMenu } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Link from '@tiptap/extension-link';
import Image from '@tiptap/extension-image';
import Underline from '@tiptap/extension-underline';
import Color from '@tiptap/extension-color';
import Document from '@tiptap/extension-document'
import Highlight from '@tiptap/extension-highlight'
import Paragraph from '@tiptap/extension-paragraph'
import Text from '@tiptap/extension-text'
import TextStyle from '@tiptap/extension-text-style'
import Blockquote from '@tiptap/extension-blockquote'
import BulletList from '@tiptap/extension-bullet-list'
import ListItem from '@tiptap/extension-list-item'
import HardBreak from '@tiptap/extension-hard-break'
import Heading from '@tiptap/extension-heading'
import HorizontalRule from '@tiptap/extension-horizontal-rule'
import Dropcursor from '@tiptap/extension-dropcursor'
import OrderedList from '@tiptap/extension-ordered-list'
import Gapcursor from '@tiptap/extension-gapcursor'
import Table from '@tiptap/extension-table'
import TableCell from '@tiptap/extension-table-cell'
import TableHeader from '@tiptap/extension-table-header'
import TableRow from '@tiptap/extension-table-row'
import Youtube from '@tiptap/extension-youtube'
import Toolbar from './Toolbar';

const TextEditor = () => {
  const [isEditable, setIsEditable] = useState<boolean>(true);

  const editor = useEditor({
    extensions: [
      StarterKit,
      Link.configure({
        openOnClick: true,
      }),
      Document, 
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
    content: '<p>Hello World</p>',
    editorProps: {
      attributes: {
        spellcheck: 'false',
      },
    },
  });

  useEffect(() => {
    if (editor) {
      editor.setEditable(isEditable);
    }
  }, [isEditable, editor]);

  if (!editor) return null;

  return (
    <div style={{marginBlockStart: '1em', marginBlockEnd: '1em', marginInlineStart: '1em', marginInlineEnd: '1em', }} >
      <div>
        <input
          type="checkbox"
          name="editable"
          id="editable"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setIsEditable(e.target.checked)
          }
        />
        {/* <button onClick={() => editor.chain().focus().toggleBold().run()}>
          Blod
        </button> */}
        <Toolbar editor={editor} />
      </div>
      {editor && (
        <BubbleMenu editor={editor} tippyOptions={{ duration: 100 }}>
          <button onClick={() => editor.chain().focus().toggleBold().run()}>
            Blod
          </button>
        </BubbleMenu>
      )}
      <EditorContent editor={editor} />
    </div>
  );
};

export default TextEditor;
