'use client';

import React, { useState } from 'react';
import styles from './ProducersFilter.module.css';
import {
  FilterCheckbox,
  FilterCheckboxGroup,
  FilterDropdown,
  FilterItem,
  ScrollContainer,
} from '@/components';
import SearchIcon from '../../../public/searchIcon.svg';
import CrossExitIcon from '../../../public/crossExitTransparent.svg';

const options = [
  { name: 'A1', value: 'a1' },
  { name: 'Eighteenth', value: 'eighteenth' },
  { name: 'Eighth', value: 'eighth' },
  { name: 'Eleventh', value: 'eleventh' },
  { name: 'Email', value: 'email' },
  { name: 'Fifteenth', value: 'fifteenth' },
  { name: 'Fifth', value: 'fifth' },
  { name: 'First', value: 'first' },
  { name: 'Fourteenth', value: 'fourteenth' },
  { name: 'Fourth', value: 'fourth' },
  { name: 'Home Phone', value: 'home-phone' },
  { name: 'Life Mobile', value: 'life-mobile' },
  { name: 'Message', value: 'message' },
  { name: 'Nineteenth', value: 'nineteenth' },
  { name: 'Ninth', value: 'ninth' },
  { name: 'Second', value: 'second' },
  { name: 'Seventeenth', value: 'seventeenth' },
  { name: 'Seventh', value: 'seventh' },
  { name: 'Sixteenth', value: 'sixteenth' },
  { name: 'Sixth', value: 'sixth' },
  { name: 'Telegram', value: 'telegram' },
  { name: 'Tenth', value: 'tenth' },
  { name: 'Third', value: 'third' },
  { name: 'Thirteenth', value: 'thirteenth' },
  { name: 'Thirtieth', value: 'thirtieth' },
  { name: 'Twelfth', value: 'twelfth' },
  { name: 'Twentieth', value: 'twentieth' },
  { name: 'Twentyeighth', value: 'twentyeighth' },
  { name: 'Twentyfifth', value: 'twentyfifth' },
  { name: 'Twentyfirst', value: 'twentyfirst' },
  { name: 'Twentyfourth', value: 'twentyfourth' },
  { name: 'Twentyninth', value: 'twentyninth' },
  { name: 'Twentysecond', value: 'twentysecond' },
  { name: 'Twentyseventh', value: 'twentyseventh' },
  { name: 'Twentysixth', value: 'twentysixth' },
  { name: 'Twentythird', value: 'twentythird' },
  { name: 'Viber', value: 'viber' },
  { name: 'Зорка', value: 'zorka' },
  { name: 'Кот', value: 'kot' },
  { name: 'Кучмен', value: 'kuchmen' },
  { name: 'Модель', value: 'model' },
  { name: 'Муми', value: 'mumi' },
  { name: 'Пес', value: 'pes' },
  { name: 'Пират', value: 'pirat' },
  { name: 'Планета', value: 'planet' },
  { name: 'Сити', value: 'city' },
  { name: 'Сказка', value: 'skazka' },
];
type ProducersFilterProps = {};

export const ProducersFilter: React.FC<ProducersFilterProps> = () => {
  const [searchValue, setSearchValue] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };
  return (
    <>
      <FilterCheckboxGroup name="producers" options={options.slice(0, 10)} />
      <FilterDropdown
        buttonContent="Посмотреть все"
        activeButtonClassname={styles.buttonActive}
        buttonClassname={styles.button}
      >
        <div className={styles.body}>
          <div className={styles.searchWrapper}>
            <div className={styles.searchIconContainer}>
              <SearchIcon />
            </div>
            <input
              type="text"
              className={styles.input}
              onChange={handleInputChange}
              value={searchValue}
              placeholder="Поиск..."
            />
            <button
              type="button"
              className={`${styles.clearBtn} ${searchValue ? styles.visible : ''}`}
              onClick={() => setSearchValue('')}
            >
              <CrossExitIcon />
            </button>
          </div>
          <ScrollContainer maxHeight="300px">
            <ul className={styles.options} role="listbox">
              {options.map((option) => (
                <FilterCheckbox
                  key={option.value}
                  name={option.name}
                  value={option.value}
                  checkboxGroupName="producers"
                />
              ))}
            </ul>
          </ScrollContainer>
        </div>
      </FilterDropdown>
    </>
  );
};
