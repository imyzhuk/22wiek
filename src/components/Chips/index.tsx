import React from 'react';
import styles from './Chips.module.css';
import { ChipButton } from '@/components';
import { Option } from '@/types/optionsModel';

type ChipsProps = {
  options: Option[];
};

export const Chips: React.FC<ChipsProps> = ({ options }) => {
  return (
    <ul className={styles.chips}>
      {options.map((option) => (
        <ChipButton key={option.value} name={option.name} />
      ))}
    </ul>
  );
};
