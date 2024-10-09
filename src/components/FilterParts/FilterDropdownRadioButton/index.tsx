import React from 'react';
import styles from './FilterDropdownRadioButton.module.css';
import CheckmarkIcon from '@icons/checkmark.svg';

type FilterDropdownRadioButtonProps = {
  onClick: () => void;
  label: React.ReactNode;
  isActive: boolean;
};

export const FilterDropdownRadioButton: React.FC<
  FilterDropdownRadioButtonProps
> = ({ onClick, isActive, label }) => {
  return (
    <label
      onClick={onClick}
      className={`${styles.option} ${isActive ? styles.optionActive : ''}`}
      aria-selected={isActive}
    >
      {label}
      <input
        className={styles.input}
        type="radio"
        checked={isActive}
        onChange={() => null}
      />
      {isActive && <CheckmarkIcon />}
    </label>
  );
};
