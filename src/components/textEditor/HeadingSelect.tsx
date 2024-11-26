import { Editor } from '@tiptap/core';
import { COLORS } from '../../vars';

interface HeadingSelectProps {
  editor: Editor | null;
}

const HeadingSelect = ({ editor }: HeadingSelectProps) => {
  const getCurrentValue = () => {
    for (let i = 1; i <= 6; i++) {
      if (editor?.isActive('heading', { level: i })) return i;
    }
    return 'paragraph';
  };

  const handleChange = (value: string) => {
    if (value === 'paragraph') {
      editor?.chain().focus().setParagraph().run();
    } else {
      editor?.chain().focus().setHeading({ 
        level: parseInt(value) as 1 | 2 | 3 | 4 | 5 | 6 
      }).run();
    }
  };

  return (
    <select
      value={getCurrentValue()}
      onChange={(e) => handleChange(e.target.value)}
      style={{
        color: '#1a1a1a',
        border: 'none',
        padding: '8px 16px',
        borderRadius: '4px',
        cursor: 'pointer',
        transition: 'all 0.3s ease',
        backgroundColor: '#4ecdc4',
      }}
    >
      <option value="paragraph">Paragraph</option>
      {Array.from({ length: 6 }, (_, i) => (
        <option key={i + 1} value={i + 1}>
          Heading {i + 1}
        </option>
      ))}
    </select>
  );
};

export default HeadingSelect;