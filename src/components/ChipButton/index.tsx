import React from 'react';
import styles from './ChipButton.module.css';

type ChipButtonProps = {
  name: string;
  onClick?: () => void;
  isActive?: boolean;
};

export const ChipButton: React.FC<ChipButtonProps> = ({
  name,
  onClick,
  isActive = false,
}) => {
  return (
    <button
      className={`${styles.chip} ${isActive ? styles.chipActive : ''}`}
      onClick={onClick}
    >
      {name}
    </button>
  );
};
