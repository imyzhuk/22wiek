import React, { MouseEventHandler } from 'react';
import styles from './CircleButton.module.css';

type CircleButtonProps = {
  children: React.ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  isActive?: boolean;
};

export const CircleButton: React.FC<CircleButtonProps> = ({
  children,
  onClick,
  isActive,
}) => {
  return (
    <button
      className={isActive ? styles.btnActive : styles.btn}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
