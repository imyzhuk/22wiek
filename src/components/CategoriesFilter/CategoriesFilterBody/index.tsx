'use client';

import React, { useState } from 'react';
import styles from './CategoriesFilterBody.module.css';
import SearchIcon from '@icons/searchIcon.svg';
import CrossExitIcon from '@icons/crossExitIcon.svg';
import { Categories } from '@/types/category';
import { useQueryParams } from '@/hooks';
import { FilterCheckbox, ScrollContainer } from '@/components';

type CategoriesFilterBodyProps = {
  items: Categories;
};

export const CategoriesFilterBody: React.FC<CategoriesFilterBodyProps> = ({
  items,
}) => {
  const [searchValue, setSearchValue] = useState('');
  const [shownCategories, setShownCategories] = useState(items);
  const { setQuery } = useQueryParams();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const handleCategoryClick = (item: Categories[number]) => {
    if (item.subCategories.length) {
      setShownCategories(item.subCategories);
      return;
    }

    setQuery('categories', item.id);
  };

  return (
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
          placeholder="Название категории"
        />
        <button
          type="button"
          className={`${styles.clearBtn} ${searchValue ? styles.visible : ''}`}
          onClick={() => setSearchValue('')}
        >
          <CrossExitIcon />
        </button>
      </div>
      <ScrollContainer maxHeight="362px">
        <ul>
          <FilterCheckbox
            checkboxGroupName=""
            name="Все товары"
            value="all"
            className={styles.firstItem}
          />
          {shownCategories.map((item) => (
            <li
              key={item.id}
              className={styles.item}
              onClick={() => handleCategoryClick(item)}
            >
              <span className={styles.itemText}>{item.name}</span>
            </li>
          ))}
        </ul>
      </ScrollContainer>
    </div>
  );
};
