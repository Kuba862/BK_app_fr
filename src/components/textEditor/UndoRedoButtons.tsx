import { Editor } from '@tiptap/core';
import { FaUndo, FaRedo } from "react-icons/fa";
import ToolbarButton from './ToolbarButton';

interface UndoRedoButtonsProps {
  editor: Editor | null;
}

const UndoRedoButtons = ({ editor }: UndoRedoButtonsProps) => {
  return (
    <div style={{ display: 'flex', gap: '4px' }}>
      <ToolbarButton 
        onclick={() => editor?.chain().focus().undo().run()}
        style={{
          opacity: editor?.can().undo() ? 1 : 0.5,
          cursor: editor?.can().undo() ? 'pointer' : 'not-allowed'
        }}
      >
        <FaUndo />
      </ToolbarButton>

      <ToolbarButton 
        onclick={() => editor?.chain().focus().redo().run()}
        style={{
          opacity: editor?.can().redo() ? 1 : 0.5,
          cursor: editor?.can().redo() ? 'pointer' : 'not-allowed'
        }}
      >
        <FaRedo />
      </ToolbarButton>
    </div>
  );
};

export default UndoRedoButtons;