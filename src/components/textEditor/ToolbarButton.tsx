import React, { ReactNode } from 'react';

interface ToolbarButtonProps {
    children?: ReactNode;
    onclick: () => void;
    disabled?: boolean;
    style?: React.CSSProperties;
}

const ToolbarButton: React.FC<ToolbarButtonProps> = ({
  onclick,
  children,
  disabled,
  style,
}) => {
  return <button style={style}  disabled={disabled} onClick={onclick}>{children}</button>;
};

export default ToolbarButton;
