import React, { useState } from 'react';
import styles from './Category.module.css';
import { Categories } from '@/types/category';
import ArrowUpIcon from '@Images/arrowUpIcon.svg';
import ArrowDownIcon from '@Images/arrowDownIcon.svg';

type CategoryProps = {
  name: string;
  subCategories: Categories;
};

export const Category: React.FC<CategoryProps> = ({ name, subCategories }) => {
  const [shownCategoriesCount, setShownCategoriesCount] = useState<number>(7);
  return (
    <ul className={styles.container}>
      <li>
        <a href="/not-found" className={styles.titleLink}>
          {name}
        </a>
      </li>
      {subCategories.slice(0, shownCategoriesCount).map((category) => (
        <li key={category.id}>
          <a href="/not-found" className={styles.link}>
            {category.name}
          </a>
        </li>
      ))}
      {subCategories.length > 7 && (
        <button
          type="button"
          className={styles.button}
          onClick={() =>
            setShownCategoriesCount(
              shownCategoriesCount === 7 ? subCategories.length : 7,
            )
          }
        >
          {shownCategoriesCount === 7 ? (
            <>
              <span>Посмотреть все</span>
              <ArrowDownIcon className={styles.arrowIcon} />
            </>
          ) : (
            <>
              <span>Свернуть</span>
              <ArrowUpIcon className={styles.arrowIcon} />
            </>
          )}
        </button>
      )}
    </ul>
  );
};
