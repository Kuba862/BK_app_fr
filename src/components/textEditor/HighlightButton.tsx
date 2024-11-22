import { Editor } from '@tiptap/core';
import { useState } from 'react';
import { FaHighlighter, FaEraser } from 'react-icons/fa';
import ToolbarButton from './ToolbarButton';

interface HighlightButtonProps {
  editor: Editor | null;
}

const HighlightButton = ({ editor }: HighlightButtonProps) => {
  const [highlightColor, setHighlightColor] = useState('#000000');

  const handleHighlight = (color?: string) => {
    if (color) {
      setHighlightColor(color);
      editor?.chain().focus().setHighlight({ color }).run();
    } else {
      editor?.chain().focus().toggleHighlight({ color: highlightColor }).run();
    }
  };

  const removeHighlight = () => {
    editor?.chain().focus().unsetHighlight().run();
  };

  return (
    <div style={{ display: 'flex', gap: '4px' }}>
      <ToolbarButton
        className={editor?.isActive('highlight') ? 'active' : ''}
        style={{ position: 'relative' }}
        onclick={() => handleHighlight()}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '4px',
            pointerEvents: 'none',
          }}
        >
          <FaHighlighter style={{ color: highlightColor }} />
        </div>
        <div
          style={{
            position: 'absolute',
            right: '2px',
            top: '2px',
            width: '15px',
            height: '15px',
            zIndex: 1,
          }}
        >
          <input
            type="color"
            value={highlightColor}
            onChange={(e) => handleHighlight(e.target.value)}
            onClick={(e) => e.stopPropagation()}
            style={{
              width: '100%',
              height: '100%',
              padding: 0,
              border: 'none',
              cursor: 'pointer',
              opacity: 0,
            }}
          />
        </div>
      </ToolbarButton>

      <ToolbarButton
        className={editor?.isActive('highlight') ? 'active' : ''}
        onclick={removeHighlight}
        style={{
          opacity: editor?.isActive('highlight') ? 1 : 0.5,
          cursor: editor?.isActive('highlight') ? 'pointer' : 'not-allowed',
        }}
      >
        <FaEraser />
      </ToolbarButton>
    </div>
  );
};

export default HighlightButton;
