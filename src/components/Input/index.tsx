'use client';

import React, { forwardRef } from 'react';
import styles from './Input.module.css';
import CrossExitIcon from '@icons/crossExitIcon.svg';

export type InputProps = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  'onChange'
> & {
  onChange: (value: string) => void;
  onClear?: () => void;
  label?: string;
  hasError?: boolean;
};
export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    { type, className, onChange, hasError, label, value, onClear, ...props },
    ref,
  ) => {
    return (
      <div className={styles.container}>
        {label && <label className={styles.label}>{label}</label>}
        <div
          className={`${styles.inputWrapper} ${hasError ? styles.inputError : ''}`}
        >
          <input
            type={type ?? 'text'}
            className={`${styles.input} ${className || ''}`}
            onChange={(e) => onChange(e.target.value)}
            value={value}
            ref={ref}
            {...props}
          />
          {onClear && value && (
            <button
              type="button"
              className={styles.clearButton}
              onClick={onClear}
            >
              <CrossExitIcon />
            </button>
          )}
        </div>
      </div>
    );
  },
);
