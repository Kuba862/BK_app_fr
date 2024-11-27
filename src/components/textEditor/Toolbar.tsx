import React, { useCallback, useState } from 'react';
import ToolbarButton from './ToolbarButton';
import { Editor } from '@tiptap/core';
import { ButtonsGroup, ButtonSection } from '../../style/toolbar';
import { FaBold, FaItalic, FaUnderline, FaLink, FaQuoteLeft, FaListUl, FaListOl, FaImage, FaTable } from "react-icons/fa";
import { MdFormatColorText } from "react-icons/md";
import TableActions from './TableActions';
import HeadingSelect from './HeadingSelect';
import HighlightButton from './HighlightButton';
import UndoRedoButtons from './UndoRedoButtons';
import ImageUpload from './ImageUpload';

const Toolbar = ({ editor }: { editor: Editor | null }) => {
  const [textColor, setTextColor] = useState<string>('#000');

  const setLink = useCallback(() => {    
    const prevUrl = editor?.getAttributes('link').href;
    const url = window.prompt('URL', prevUrl);

    if (url === null) return;

    if (url === '') {
      editor?.chain().focus().extendMarkRange('link').unsetLink().run();
      return;
    }

    editor
      ?.chain()
      .focus()
      .extendMarkRange('link')
      .setLink({ href: url })
      .run();
  }, [editor]);

  const addImage = useCallback(() => {
    const url = window.prompt('URL');

    if (url) {
      editor?.chain().focus().setImage({ src: url }).run();
    }
  }, [editor]);

  return (
    <ButtonsGroup>
        <ButtonSection>
      <ToolbarButton className={editor?.isActive('bold') ? 'active' : ''} onclick={() => {
        editor?.chain().focus().toggleBold().run()
        }}>
        <FaBold />
      </ToolbarButton>
      <ToolbarButton className={editor?.isActive('italic') ? 'active' : ''}
        onclick={() => editor?.chain().focus().toggleItalic().run()}
      >
        <FaItalic />
      </ToolbarButton>
      <ToolbarButton className={editor?.isActive('underline') ? 'active' : ''}
        onclick={() => editor?.chain().focus().toggleUnderline().run()}
      >
        <FaUnderline />
      </ToolbarButton>
      <ToolbarButton className={editor?.isActive('link') ? 'active' : ''} onclick={setLink}><FaLink /></ToolbarButton>
      <ToolbarButton onclick={() => {}}>
        <MdFormatColorText color={textColor} />
      <input
        type="color"
        onChange={(e) => {
          editor?.chain().focus().setColor(e.target.value).run();
          setTextColor(e.target.value);
        }}
        style={{
          width: '20px',
          height: '20px',
          padding: 0,
          border: 'none',
          cursor: 'pointer',
          backgroundColor: 'transparent'
        }}
      />
    </ToolbarButton>
    <HighlightButton editor={editor} />
      <ToolbarButton className={editor?.isActive('blockquote') ? 'active' : ''}
        onclick={() => editor?.chain().focus().toggleBlockquote().run()}
      >
        <FaQuoteLeft />
      </ToolbarButton>
      <ToolbarButton className={editor?.isActive('bulletList') ? 'active' : ''}
        onclick={() => editor?.chain().focus().toggleBulletList().run()}
      >
        <FaListUl />
      </ToolbarButton>
      <ToolbarButton className={editor?.isActive('orderedList') ? 'active' : ''}
        onclick={() => editor?.chain().focus().toggleOrderedList().run()}
      >
        <FaListOl />
      </ToolbarButton>
      <ToolbarButton className={editor?.isActive('hardBreak') ? 'active' : ''}
        onclick={() => editor?.chain().focus().setHardBreak().run()}
      >
        break line
      </ToolbarButton>
      <ToolbarButton className={editor?.isActive('horizontalRule') ? 'active' : ''} 
        onclick={() => editor?.chain().focus().setHorizontalRule().run()}
      >
        horizontal line
      </ToolbarButton>
      <HeadingSelect editor={editor} />
      <ToolbarButton className={editor?.isActive('image') ? 'active' : ''} onclick={addImage}><FaImage /></ToolbarButton>
      <ImageUpload editor={editor} />
      <ToolbarButton className={editor?.isActive('table') ? 'active' : ''}
        onclick={() =>
          editor
            ?.chain()
            .focus()
            .insertTable({ rows: 3, cols: 3, withHeaderRow: true })
            .run()
        }
      >
        <FaTable />
      </ToolbarButton>
      <TableActions editor={editor} />
      <UndoRedoButtons editor={editor} />
      </ButtonSection>
    </ButtonsGroup>
  );
};

export default Toolbar;
