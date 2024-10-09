'use client';

import React, { useState } from 'react';
import styles from './PromoDropdown.module.css';
import { FilterDropdown, FilterDropdownRadioButton } from '@/components';

type PromoDropdownProps = {};

const options = ['Популярные', 'Дешевые', 'Дорогие', 'Выгодные'] as const;
type Option = (typeof options)[number];

export const PromoDropdown: React.FC<PromoDropdownProps> = () => {
  const [activeOption, setActiveOption] = useState<Option>('Популярные');

  const handleOptionClick = (option: Option) => {
    if (option !== activeOption) {
      setActiveOption(option);
    }
  };

  return (
    <div className={styles.wrapper}>
      <FilterDropdown
        buttonContent={`Сначала ${activeOption.toLowerCase()}`}
        activeButtonClassname={styles.buttonActive}
        buttonClassname={styles.button}
        canCloseIfClickInsideMenu
      >
        <div className={styles.options} role="listbox">
          {options.map((option) => (
            <FilterDropdownRadioButton
              label={option}
              key={option}
              onClick={() => handleOptionClick(option)}
              isActive={option === activeOption}
            />
          ))}
        </div>
      </FilterDropdown>
    </div>
  );
};
