import React, { useState } from 'react';
import styles from './Category.module.css';
import { Categories } from '@/types/category';
import ArrowUpIcon from '@icons/arrowUpIcon.svg';
import ArrowDownIcon from '@icons/arrowDownIcon.svg';
import Link from 'next/link';

type CategoryProps = {
  name: string;
  subCategories: Categories;
};

export const Category: React.FC<CategoryProps> = ({ name, subCategories }) => {
  const [shownCategoriesCount, setShownCategoriesCount] = useState<number>(7);
  return (
    <ul className={styles.container}>
      <li>
        <Link href="/not-found" className={styles.titleLink}>
          {name}
        </Link>
      </li>
      {subCategories.slice(0, shownCategoriesCount).map((category) => (
        <li key={category.id}>
          <Link href="/not-found" className={styles.link}>
            {category.name}
          </Link>
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
