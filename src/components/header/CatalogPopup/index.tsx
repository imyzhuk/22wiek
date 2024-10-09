import React, { forwardRef, useState } from 'react';
import styles from './CatalogPopup.module.css';
import { Selections } from './Selections';
import { categories } from '@/data/category';
import { Category } from './Category';
import KitchenIcon from '@icons/kitchenIcon.svg';
import { categoryRecommendations, selections } from '@/data/catalog';
import AllPromoIcon from '@icons/allPromoIcon.svg';
import PartlyPayIcon from '@icons/partlyPayIcon.svg';
import ProcentIcon from '@icons/procentIcon.svg';
import { Chips } from '@/components';
import { BrandCrisps } from './BrandCrisps';
import Link from 'next/link';

type CatalogPopupProps = {};

export const CatalogPopup = forwardRef<HTMLDivElement, CatalogPopupProps>(
  (props, ref) => {
    const [activeCategoryIndex, setActiveCategoryIndex] = useState(0);
    return (
      <>
        <div className={styles.container} ref={ref}>
          <div className={styles.wrapper}>
            <div className={styles.leftColumn}>
              <ul className={styles.listContainer}>
                {categories.map((category, idx) => (
                  <li
                    key={category.id}
                    onMouseOver={() => setActiveCategoryIndex(idx)}
                  >
                    <Link
                      href="/not-found"
                      className={`${styles.category} ${activeCategoryIndex === idx ? styles.activeCategory : ''}`}
                    >
                      <span className={styles.icon}>
                        <KitchenIcon />
                      </span>
                      <span className={styles.categoryName}>
                        {category.name}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
              <ul className={styles.linksContainer}>
                <li>
                  <Link
                    className={styles.category}
                    href="/special_offers/promo"
                  >
                    <span className={`${styles.icon} ${styles.firstIcon}`}>
                      <AllPromoIcon />
                    </span>
                    <span className={styles.categoryName}>Все акции</span>
                  </Link>
                </li>
                <li>
                  <Link className={styles.category} href="/not-found">
                    <span className={`${styles.icon} ${styles.secondIcon}`}>
                      <PartlyPayIcon />
                    </span>
                    <span className={styles.categoryName}>Оплата частями</span>
                  </Link>
                </li>
                <li>
                  <Link className={styles.category} href="/not-found">
                    <span className={styles.icon}>
                      <ProcentIcon />
                    </span>
                    <span className={styles.categoryName}>
                      Уцененные товары
                    </span>
                  </Link>
                </li>
              </ul>
            </div>
            <div className={styles.rightColumn}>
              <h3 className={styles.heading}>
                {categories[activeCategoryIndex].name}
              </h3>
              <BrandCrisps
                items={
                  categoryRecommendations[categories[activeCategoryIndex].id]
                }
              />
              <div className={styles.content}>
                <div className={styles.categoriesList}>
                  <div className={styles.categoriesColumn}>
                    {categories[activeCategoryIndex].subCategories
                      .slice(
                        0,
                        Math.ceil(
                          categories[activeCategoryIndex].subCategories.length /
                            2,
                        ),
                      )
                      .map((subCategory) => (
                        <Category
                          key={subCategory.id}
                          name={subCategory.name}
                          subCategories={subCategory.subCategories}
                        />
                      ))}
                  </div>
                  <div className={styles.catagoriesColumn}>
                    {categories[activeCategoryIndex].subCategories
                      .slice(
                        Math.ceil(
                          categories[activeCategoryIndex].subCategories.length /
                            2,
                        ),
                      )
                      .map((subCategory) => (
                        <Category
                          key={subCategory.id}
                          name={subCategory.name}
                          subCategories={subCategory.subCategories}
                        />
                      ))}
                  </div>
                </div>
                <Selections
                  items={selections[categories[activeCategoryIndex].id]}
                />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.overlay}></div>
      </>
    );
  },
);
