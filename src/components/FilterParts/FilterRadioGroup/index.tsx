import React from 'react';
import styles from './FilterRadioGroup.module.css';

type FilterRadioGroupProps = {
  name: string;
  options: { name: string; value: string }[];
};

const discounts = [
  { name: 'Все', value: 'all' },
  { name: 'от 50%', value: '50' },
  { name: 'от 40%', value: '40' },
  { name: 'от 30%', value: '30' },
  { name: 'от 20%', value: '20' },
  { name: 'от 10%', value: '10' },
];

export const FilterRadioGroup: React.FC<FilterRadioGroupProps> = ({
  name,
  options,
}) => {
  return (
    <ul role="radiogroup" className={styles.radioGroup}>
      {options.map((option) => (
        <li key={option.value}>
          <label className={styles.radio}>
            <input
              type="radio"
              name={name}
              value={option.value}
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
