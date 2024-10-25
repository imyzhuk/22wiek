'use client';

import React, { useEffect, useState } from 'react';
import styles from './RangeFilter.module.css';

type RangeFilterProps = {
  fromValuePlaceholder?: string;
  untilValuePlaceholder?: string;
  unit?: string;
  onChange: (values: { fromValue?: number; untilValue?: number }) => void;
  values: { fromValue?: number; untilValue?: number };
  maxPrice: number;
  minPrice: number;
};

const { format } = new Intl.NumberFormat('ru', {
  minimumFractionDigits: 2,
});

export const RangeFilter: React.FC<RangeFilterProps> = ({
  unit,
  onChange,
  values,
  maxPrice,
  minPrice,
}) => {
  const [fromValue, setFromValue] = useState<number>(values.fromValue || 0);
  const [untilValue, setUntilValue] = useState<number>(values.untilValue || 0);

  useEffect(() => {
    setFromValue(values.fromValue || 0);
    setUntilValue(values.untilValue || 0);
  }, [values]);
  const handleFromValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = +e.target.value;
    setFromValue(value);
  };

  const handleFromValueBlur = () => {
    onChange({
      fromValue: fromValue,
      untilValue: values.untilValue,
    });
  };

  const handleUntilValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = +e.target.value;
    setUntilValue(value);
  };

  const handleUntilValueBlur = () => {
    onChange({
      fromValue: values.fromValue,
      untilValue: untilValue,
    });
  };

  return (
    <div className={styles.inputs}>
      <label className={styles.label}>
        <span className={styles.labelText}>От {unit && `, ${unit}`}</span>
        <input
          type="text"
          inputMode="decimal"
          placeholder={format(minPrice)}
          className={styles.input}
          onChange={handleFromValueChange}
          onBlur={handleFromValueBlur}
          value={fromValue || ''}
        />
      </label>

      <label className={styles.label}>
        <span className={styles.labelText}>До {unit && `, ${unit}`}</span>
        <input
          type="text"
          inputMode="decimal"
          placeholder={format(maxPrice)}
          className={styles.input}
          onBlur={handleUntilValueBlur}
          onChange={handleUntilValueChange}
          value={untilValue || ''}
        />
      </label>
    </div>
  );
};
