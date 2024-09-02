'use client';

import React from 'react';
import styles from './RangeFilter.module.css';

type RangeFilterProps = {
  fromValuePlaceholder?: string;
  untilValuePlaceholder?: string;
};

export const RangeFilter: React.FC<RangeFilterProps> = ({
  fromValuePlaceholder,
  untilValuePlaceholder,
}) => {
  const handleFromChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = +e.target.value;
    if (value) {
      console.log(value);
    }
  };

  const handleUntilChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = +e.target.value;
    if (value) {
      console.log(value);
    }
  };

  return (
    <div className={styles.inputs}>
      <label className={styles.label}>
        <span className={styles.labelText}>От, р.</span>
        <input
          type="number"
          placeholder={fromValuePlaceholder || ''}
          className={styles.input}
          onBlur={handleFromChange}
        />
      </label>

      <label className={styles.label}>
        <span className={styles.labelText}>До, р.</span>
        <input
          type="number"
          placeholder={untilValuePlaceholder || ''}
          className={styles.input}
          onBlur={handleUntilChange}
        />
      </label>
    </div>
  );
};
