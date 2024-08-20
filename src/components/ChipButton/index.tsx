import React from 'react';
import styles from './ChipButton.module.css';

type ChipButtonProps = {
  value: string;
  name: string;
};

export const ChipButton: React.FC<ChipButtonProps> = ({ value, name }) => {
  return (
    <li className={`${styles.chip} ${true ? styles.chipActive : ''}`} key={value}>
      {name}
    </li>
  );
};
