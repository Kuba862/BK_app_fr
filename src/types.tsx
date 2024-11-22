import { Editor } from '@tiptap/core';

export interface TableOperation {
  label: string;
  action: (editor: Editor | null) => void;
}