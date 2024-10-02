'use client';

import React, { useState } from 'react';
import styles from './SortFilter.module.css';
import { Option } from '@/types/optionsModel';
import { options } from '@/data/promo';
import { useOutsideClick } from '@/hooks';
import { FilterDropdownRadioButton } from '@/components';

type SortFilterProps = {
  options: Option[];
};

export const SortFilter: React.FC<SortFilterProps> = ({ options }) => {
  const [activeOption, setActiveOption] = useState<Option>(options[0]);
  const { ref, isActive, setIsActive } = useOutsideClick<HTMLDivElement>(false);

  const handleOptionClick = (option: Option) => {
    if (option.value !== activeOption.value) {
      setActiveOption(option);
      setIsActive(false);
    }
  };

  return (
    <div className={styles.wrapper}>
      <button
        type="button"
        onClick={() => setIsActive((prev) => !prev)}
        className={`${styles.button} ${isActive ? styles.active : ''}`}
        aria-expanded={isActive}
      >
        Сначала {activeOption.name.toLowerCase()}
      </button>
      {isActive && (
        <div ref={ref} className={styles.options} role="listbox">
          {options.map((option) => (
            <FilterDropdownRadioButton
              label={option.name}
              key={option.value}
              onClick={() => handleOptionClick(option)}
              isActive={option.value === activeOption.value}
            />
          ))}
        </div>
      )}
    </div>
  );
};
