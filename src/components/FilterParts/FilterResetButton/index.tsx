import React from 'react';
import styles from './FilterResetButton.module.css';

type FilterResetButtonProps = {
  onClick: () => void;
};

export const FilterResetButton: React.FC<FilterResetButtonProps> = ({
  onClick,
}) => {
  return (
    <div className={styles.wrapper}>
      <button className={styles.button} onClick={onClick}>
        Сбросить фильтр
      </button>
    </div>
  );
};
