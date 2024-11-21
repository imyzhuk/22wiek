'use client';
import React, { InputHTMLAttributes } from 'react';
import styles from './FilterCheckbox.module.css';
import CheckmarkIcon from '@icons/smallCheckmark.svg';
import CheckboxLineIcon from '@icons/checkboxLine.svg';
import { FieldValues, UseFormRegister } from 'react-hook-form';

type FilterCheckboxProps = InputHTMLAttributes<HTMLInputElement> & {
  name: string;
  value: string;
  className?: string;
  checked?: boolean;
  responsive?: boolean;
  register?: UseFormRegister<any>;
};

export const FilterCheckbox: React.FC<FilterCheckboxProps> = ({
  name,
  value,
  className,
  register,
  responsive,
  ...props
}) => {
  return (
    <div
      key={value}
      className={`${styles.wrapper} ${responsive ? styles.responsive : ''} ${className || ''}`}
    >
      <label className={styles.checkbox}>
        <input
          type="checkbox"
          className={styles.input}
          value={value}
          {...register?.(value)}
          {...props}
        />
        <span className={styles.square}>
          <span className={styles.emptyCheckmark}></span>
          <CheckmarkIcon className={styles.checkmark} />
          <CheckboxLineIcon className={styles.checkboxLine} />
        </span>
        <span className={styles.text}>{name}</span>
      </label>
    </div>
  );
};
