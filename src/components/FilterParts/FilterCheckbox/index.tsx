'use client';
import React from 'react';
import styles from './FilterCheckbox.module.css';
import CheckmarkIcon from '@Images/smallCheckmark.svg';
import CheckboxLineIcon from '@Images/checkboxLine.svg';

type FilterCheckboxProps = {
  name: string;
  value: string;
  checkboxGroupName: string;
  className?: string;
};

export const FilterCheckbox: React.FC<FilterCheckboxProps> = ({
  checkboxGroupName,
  name,
  value,
  className,
}) => {
  return (
    <div key={value} className={`${styles.wrapper} ${className || ''}`}>
      <label className={styles.checkbox}>
        <input
          type="checkbox"
          name={checkboxGroupName}
          value={value}
          className={styles.input}
        />
        <span className={styles.square}></span>
        <CheckmarkIcon className={styles.checkmark} />
        <CheckboxLineIcon className={styles.checkboxLine} />
        <span className={styles.text}>{name}</span>
      </label>
    </div>
  );
};
