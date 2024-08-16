import React, { MouseEventHandler } from 'react';
import styles from './circleButton.module.css';

type CircleButtonProps = {
  children: React.ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
};

const CircleButton: React.FC<CircleButtonProps> = ({ children, onClick }) => {
  return (
    <button className={styles.btn} onClick={onClick}>
      {children}
    </button>
  );
};

export default CircleButton;
