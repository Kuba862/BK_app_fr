import { Editor } from '@tiptap/core';
import { COLORS } from '../../vars';
import { TableOperation } from '../../types';

interface TableActionsProps {
  editor: Editor | null;
}

const tableOperations: TableOperation[] = [
  {
    label: 'Add column before',
    action: (editor) => editor?.chain().focus().addColumnBefore().run(),
  },
  {
    label: 'Add column after',
    action: (editor) => editor?.chain().focus().addColumnAfter().run(),
  },
  {
    label: 'Delete column',
    action: (editor) => editor?.chain().focus().deleteColumn().run(),
  },
  {
    label: 'Add row before',
    action: (editor) => editor?.chain().focus().addRowBefore().run(),
  },
  {
    label: 'Add row after',
    action: (editor) => editor?.chain().focus().addRowAfter().run(),
  },
  {
    label: 'Delete row',
    action: (editor) => editor?.chain().focus().deleteRow().run(),
  },
  {
    label: 'Delete table',
    action: (editor) => editor?.chain().focus().deleteTable().run(),
  },
  {
    label: 'Merge cells',
    action: (editor) => editor?.chain().focus().mergeCells().run(),
  },
  {
    label: 'Split cell',
    action: (editor) => editor?.chain().focus().splitCell().run(),
  },
  {
    label: 'Toggle header column',
    action: (editor) => editor?.chain().focus().toggleHeaderColumn().run(),
  },
  {
    label: 'Toggle header row',
    action: (editor) => editor?.chain().focus().toggleHeaderRow().run(),
  },
  {
    label: 'Toggle header cell',
    action: (editor) => editor?.chain().focus().toggleHeaderCell().run(),
  },
  {
    label: 'Set cell attribute',
    action: (editor) =>
      editor?.chain().focus().setCellAttribute('colspan', 2).run(),
  },
  {
    label: 'Go to next cell',
    action: (editor) => editor?.chain().focus().goToNextCell().run(),
  },
  {
    label: 'Go to previous cell',
    action: (editor) => editor?.chain().focus().goToPreviousCell().run(),
  },
  {
    label: 'Merge or split',
    action: (editor) => editor?.chain().focus().mergeOrSplit().run(),
  },
];

const TableActions = ({ editor }: TableActionsProps) => {
  return (
    <select
      //   disabled={editor?.isActive('table')}
      onChange={(e) => {
        const operation = tableOperations[parseInt(e.target.value)];
        operation.action(editor);
        e.target.value = '-1';
      }}
      value="-1"
      style={{
        color: '#1a1a1a',
        border: 'none',
        padding: '8px 16px',
        borderRadius: '4px',
        cursor: 'pointer',
        transition: 'all 0.3s ease',
        backgroundColor: editor?.isActive('table') ? '#4ecdc4' : '#4ecdc4',
        opacity: editor?.isActive('table') ? 1 : 0.5,
      }}
    >
      <option value="-1" disabled>
        Table operations
      </option>
      {tableOperations.map((op, index) => (
        <option key={index} value={index}>
          {op.label}
        </option>
      ))}
    </select>
  );
};

export default TableActions;
