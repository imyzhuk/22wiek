'use client';
import React from 'react';
import styles from './FiltersButtons.module.css';
import { useMediaQuery } from '@/hooks';
import FilterIcon from '@icons/filterIcon.svg';

type FiltersButtonsProps = {
  onFiltersButtonClick: () => void;
};

export const FiltersButtons: React.FC<FiltersButtonsProps> = ({
  onFiltersButtonClick,
}) => {
  const isTablet = useMediaQuery({ maxWidth: 992 });
  return (
    <>
      {isTablet && (
        <div className={styles.container}>
          <button className={styles.button} onClick={onFiltersButtonClick}>
            <span>Фильтр</span>
            <span className={styles.icon}>
              <FilterIcon />
            </span>
          </button>
        </div>
      )}
    </>
  );
};
