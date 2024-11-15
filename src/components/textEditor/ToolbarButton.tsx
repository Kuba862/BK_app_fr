import React, { ReactNode } from 'react';
import { Button } from '../../style/toolbar';

interface ToolbarButtonProps {
    children?: ReactNode;
    onclick: () => void;
    disabled?: boolean;
    style?: React.CSSProperties;
    className?: string;
}

const ToolbarButton: React.FC<ToolbarButtonProps> = ({
  onclick,
  children,
  disabled,
  style,
  className = '',
  ...props
}) => {
  return <Button className={className} style={style}  disabled={disabled} onClick={onclick}>{children}</Button>;
};

export default ToolbarButton;
