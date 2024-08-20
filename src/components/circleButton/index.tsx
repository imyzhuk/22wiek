import React, { MouseEventHandler } from 'react';
import styles from './CircleButton.module.css';

type CircleButtonProps = {
  children: React.ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
};

export const CircleButton: React.FC<CircleButtonProps> = ({ children, onClick }) => {
  return (
    <button className={styles.btn} onClick={onClick}>
      {children}
    </button>
  );
};
