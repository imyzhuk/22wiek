'use client';

import React, { useState } from 'react';
import styles from './ProducersFilter.module.css';
import { FilterCheckbox, FilterDropdown, ScrollContainer } from '@/components';
import SearchIcon from '@icons/searchIcon.svg';
import CrossExitIcon from '@icons/crossExitTransparent.svg';
import { UseFormRegister } from 'react-hook-form';
import { Producer } from '@prisma/client';

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
type ProducersFilterProps = {
  fields: (Producer & { checked: boolean })[];
  register: UseFormRegister<any>;
};

export const ProducersFilter: React.FC<ProducersFilterProps> = ({
  fields,
  register,
}) => {
  return (
    <>
      <ul>
        {fields.slice(0, 10).map((item, index) => (
          <FilterCheckbox
            key={item.id}
            name={item.name}
            value={`producers.${index}.checked`}
            register={register}
          />
        ))}
      </ul>
      {/*Boolean(fields.length) && <FilterDropdown
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
              {fields.map((item, index) => (
                <FilterCheckbox
                  key={item.id}
                  name={item.name}
                  value={`producers.${index}.checked`}
                  register={register}
                />
              ))}
            </ul>
          </ScrollContainer>
        </div>
              </FilterDropdown>*/}
    </>
  );
};
