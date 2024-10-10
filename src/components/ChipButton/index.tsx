import React from 'react';
import styles from './ChipButton.module.css';

type ChipButtonProps = {
  value: string;
  name: string;
  onClick?: () => void;
  isActive?: boolean;
};

export const ChipButton: React.FC<ChipButtonProps> = ({
  value,
  name,
  onClick,
  isActive = false,
}) => {
  return (
    <button
      className={`${styles.chip} ${isActive ? styles.chipActive : ''}`}
      key={value}
      onClick={onClick}
    >
      {name}
    </button>
  );
};
