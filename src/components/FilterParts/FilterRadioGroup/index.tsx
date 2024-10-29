import React from 'react';
import styles from './FilterRadioGroup.module.css';
import { UseFormRegister } from 'react-hook-form';

type FilterRadioGroupProps = {
  name: string;
  options: { name: string; value: string }[];
  register: UseFormRegister<any>;
};

export const FilterRadioGroup: React.FC<FilterRadioGroupProps> = ({
  name,
  options,
  register,
}) => {
  return (
    <ul role="radiogroup" className={styles.radioGroup}>
      {options.map((option) => (
        <li key={option.value}>
          <label className={styles.radio}>
            <input
              type="radio"
              value={option.value}
              {...register?.(name)}
              className={styles.input}
            />
            <span className={styles.radioCircle}>
              <span className={styles.radioInnerCircle} />
            </span>
            <span className={styles.radioText}>{option.name}</span>
          </label>
        </li>
      ))}
    </ul>
  );
};
