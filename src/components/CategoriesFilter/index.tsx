import React from 'react';
import styles from './CategoriesFilter.module.css';
import { FilterDropdown, FilterItem } from '@/components';
import BurgerMenuIcon from '../../../public/burgerMenu.svg';
import { CategoriesFilterBody } from './CategoriesFilterBody';
import { categories } from '@/data/category';

const ButtonContant = (
  <>
    <BurgerMenuIcon></BurgerMenuIcon>
    <span className={styles.buttonText}>Все товары</span>
  </>
);

type CategoriesFilterProps = {};

export const CategoriesFilter: React.FC<CategoriesFilterProps> = () => {
  return (
    <FilterItem title="Категория товаров">
      <div className={styles.wrapper}>
        <FilterDropdown
          buttonContant={ButtonContant}
          buttonClassname={styles.button}
          activeButtonClassname={styles.buttonActive}
        >
          <CategoriesFilterBody items={categories} />
        </FilterDropdown>
      </div>
    </FilterItem>
  );
};
