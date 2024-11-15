import React, { useCallback, useState } from 'react';
import ToolbarButton from './ToolbarButton';
import { Editor } from '@tiptap/core';
import { HIGHLIGHT_COLORS } from '../../vars';
import { ButtonsGroup, ButtonSection } from '../../style/toolbar';

const Toolbar = ({ editor }: { editor: Editor | null }) => {
  const [showColors, setShowColors] = useState<boolean>(false);
  const [width, setWidth] = useState<number | string>(640);
  const [height, setHeight] = useState<number | string>(480);

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

  const generateColorButtons = (colors: string[]) => {
    return colors.map((color) => (
      <ToolbarButton
        onclick={() => editor?.chain().focus().setColor(color).run()}
        style={{ backgroundColor: color, width: '20px', height: '20px' }}
      />
    ));
  };

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
        Bold
      </ToolbarButton>
      <ToolbarButton className={editor?.isActive('italic') ? 'active' : ''}
        onclick={() => editor?.chain().focus().toggleItalic().run()}
      >
        Italic
      </ToolbarButton>
      <ToolbarButton className={editor?.isActive('underline') ? 'active' : ''}
        onclick={() => editor?.chain().focus().toggleUnderline().run()}
      >
        Underline
      </ToolbarButton>
      <ToolbarButton className={editor?.isActive('link') ? 'active' : ''} onclick={setLink}>set link</ToolbarButton>
      {/* <ToolbarButton className={!editor?.isActive('link') ? 'active' : ''}
        onclick={() => editor?.chain().focus().unsetLink().run()}
        disabled={!editor?.isActive('link')}
      >
        unset link
      </ToolbarButton> */}
      <button onClick={() => setShowColors(!showColors)}>Text color</button>
      <ToolbarButton className={editor?.isActive('highlight') ? 'active' : ''}
        onclick={() => editor?.chain().focus().toggleHighlight().run()}
      >
        Highlight
      </ToolbarButton>
      <div>{showColors && generateColorButtons(HIGHLIGHT_COLORS)}</div>
      <ToolbarButton className={editor?.isActive('blockquote') ? 'active' : ''}
        onclick={() => editor?.chain().focus().toggleBlockquote().run()}
      >
        Blockquote
      </ToolbarButton>
      <ToolbarButton className={editor?.isActive('bulletList') ? 'active' : ''}
        onclick={() => editor?.chain().focus().toggleBulletList().run()}
      >
        bullet list
      </ToolbarButton>
      <ToolbarButton className={editor?.isActive('hardBreak') ? 'active' : ''}
        onclick={() => editor?.chain().focus().setHardBreak().run()}
      >
        break line
      </ToolbarButton>
      {Array.from({ length: 6 }, (_, i) => (
        <ToolbarButton className={editor?.isActive('heading', { level: (i + 1) as 1 | 2 | 3 | 4 | 5 | 6 }) ? 'active' : ''}
          key={i}
          onclick={() =>
            editor
              ?.chain()
              .focus()
              .setHeading({ level: (i + 1) as 1 | 2 | 3 | 4 | 5 | 6 })
              .run()
          }
        >
          Heading {i + 1}
        </ToolbarButton>
      ))}
      <ToolbarButton className={editor?.isActive('horizontalRule') ? 'active' : ''} 
        onclick={() => editor?.chain().focus().setHorizontalRule().run()}
      >
        horizontal line
      </ToolbarButton>
      <ToolbarButton className={editor?.isActive('image') ? 'active' : ''} onclick={addImage}>Add image</ToolbarButton>
      <ToolbarButton className={editor?.isActive('orderedList') ? 'active' : ''}
        onclick={() => editor?.chain().focus().toggleOrderedList().run()}
      >
        numbered list
      </ToolbarButton>
      </ButtonSection>
      <ButtonSection>
      <ToolbarButton className={editor?.isActive('table') ? 'active' : ''}
        onclick={() =>
          editor
            ?.chain()
            .focus()
            .insertTable({ rows: 3, cols: 3, withHeaderRow: true })
            .run()
        }
      >
        insert table
      </ToolbarButton>
      <ToolbarButton className={editor?.isActive('table') ? 'active' : ''}
        onclick={() => editor?.chain().focus().addColumnBefore().run()}
      >
        add column before
      </ToolbarButton>
      <ToolbarButton className={editor?.isActive('table') ? 'active' : ''}
        onclick={() => editor?.chain().focus().addColumnAfter().run()}
      >
        Add column after
      </ToolbarButton>
      <ToolbarButton className={editor?.isActive('table') ? 'active' : ''}
        onclick={() => editor?.chain().focus().deleteColumn().run()}
      >
        Delete column
      </ToolbarButton>
      <ToolbarButton className={editor?.isActive('table') ? 'active' : ''}
        onclick={() => editor?.chain().focus().addRowBefore().run()}
      >
        Add row before
      </ToolbarButton>
      <ToolbarButton className={editor?.isActive('table') ? 'active' : ''}
        onclick={() => editor?.chain().focus().addRowAfter().run()}
      >
        Add row after
      </ToolbarButton>
      <ToolbarButton className={editor?.isActive('table') ? 'active' : ''}
        onclick={() => editor?.chain().focus().deleteRow().run()}
      >
        Delete row
      </ToolbarButton>
      <ToolbarButton className={editor?.isActive('table') ? 'active' : ''}
        onclick={() => editor?.chain().focus().deleteTable().run()}
      >
        Delete table
      </ToolbarButton>
      <ToolbarButton className={editor?.isActive('table') ? 'active' : ''}
        onclick={() => editor?.chain().focus().mergeCells().run()}
      >
        Merge cells
      </ToolbarButton>
      <ToolbarButton className={editor?.isActive('table') ? 'active' : ''}
        onclick={() => editor?.chain().focus().splitCell().run()}
      >
        Split cell
      </ToolbarButton>
      <ToolbarButton className={editor?.isActive('table') ? 'active' : ''}
        onclick={() => editor?.chain().focus().toggleHeaderColumn().run()}
      >
        Toggle header column
      </ToolbarButton>
      <ToolbarButton className={editor?.isActive('table') ? 'active' : ''}
        onclick={() => editor?.chain().focus().toggleHeaderRow().run()}
      >
        Toggle header row
      </ToolbarButton>
      <ToolbarButton className={editor?.isActive('table') ? 'active' : ''}
        onclick={() => editor?.chain().focus().toggleHeaderCell().run()}
      >
        Toggle header cell
      </ToolbarButton>
      <ToolbarButton className={editor?.isActive('table') ? 'active' : ''}
        onclick={() => editor?.chain().focus().mergeOrSplit().run()}
      >
        Merge or split
      </ToolbarButton>
      <ToolbarButton className={editor?.isActive('table') ? 'active' : ''}
        onclick={() =>
          editor?.chain().focus().setCellAttribute('colspan', 2).run()
        }
      >
        Set cell attribute
      </ToolbarButton>
      <ToolbarButton className={editor?.isActive('table') ? 'active' : ''}
        onclick={() => editor?.chain().focus().fixTables().run()}
      >
        Fix tables
      </ToolbarButton>
      <ToolbarButton className={editor?.isActive('table') ? 'active' : ''}
        onclick={() => editor?.chain().focus().goToNextCell().run()}
      >
        Go to next cell
      </ToolbarButton>
      <ToolbarButton className={editor?.isActive('table') ? 'active' : ''}
        onclick={() => editor?.chain().focus().goToPreviousCell().run()}
      >
        Go to previous cell
      </ToolbarButton>
      </ButtonSection>
    </ButtonsGroup>
  );
};

export default Toolbar;
