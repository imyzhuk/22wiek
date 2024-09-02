'use client';

import React, { useState } from 'react';
import styles from './PromoDropdown.module.css';
import CheckmarkIcon from '../../../public/checkmark.svg';
import { FilterDropdown } from '..';

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
        buttonContant={`Сначала ${activeOption.toLowerCase()}`}
        activeButtonClassname={styles.buttonActive}
        buttonClassname={styles.button}
        canCloseIfClickInsideMenu
      >
        <div className={styles.options} role="listbox">
          {options.map((option) => (
            <label
              onClick={() => handleOptionClick(option)}
              key={option}
              className={`${styles.option} ${option == activeOption ? styles.optionActive : ''}`}
              role="option"
              aria-selected={option === activeOption}
            >
              {option}
              <input
                className={styles.input}
                type="radio"
                checked={option === activeOption}
              />
              {option == activeOption && <CheckmarkIcon />}
            </label>
          ))}
        </div>
      </FilterDropdown>
    </div>
  );
};
