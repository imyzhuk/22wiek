import React from 'react';
import styles from './FilterResetButton.module.css';

type FilterResetButtonProps = {};

export const FilterResetButton: React.FC<FilterResetButtonProps> = () => {
  return (
    <div className={styles.wrapper}>
      <button className={styles.button}>Сбросить фильтр</button>
    </div>
  );
};
