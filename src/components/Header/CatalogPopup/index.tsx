import React, { forwardRef, useEffect, useState } from 'react';
import styles from './CatalogPopup.module.css';
import { Selections } from './Selections';
import { Category } from './Category';
import KitchenIcon from '@icons/kitchenIcon.svg';
import AllPromoIcon from '@icons/allPromoIcon.svg';
import ProcentIcon from '@icons/procentIcon.svg';
import { Chips, Loader } from '@/components';
import { BrandCrisps } from './BrandCrisps';
import Link from 'next/link';
import catalogAPI from '@/services/catalogAPI';
import { useActions, useTypedSelector } from '@/hooks';

type CatalogPopupProps = {
  onClose: () => void;
};

export const CatalogPopup = forwardRef<HTMLDivElement, CatalogPopupProps>(
  ({ onClose }, ref) => {
    const [isLoading, setIsLoading] = useState(false);
    const [activeCategoryIndex, setActiveCategoryIndex] = useState(0);
    const { setCatalog } = useActions();
    const categories = useTypedSelector((state) => state.catalog.categories);

    const getCatalog = async () => {
      setIsLoading(true);
      const { data } = await catalogAPI.getCatalog();
      setCatalog(data);
      setIsLoading(false);
    };

    useEffect(() => {
      if (!categories.length) {
        getCatalog();
      }
    }, []);

    return (
      <>
        <div className={styles.container} ref={ref}>
          <div className={styles.wrapper}>
            {isLoading ? (
              <div className={styles.loadingWrapper}>
                <Loader />
              </div>
            ) : (
              <>
                <div className={styles.leftColumn}>
                  <ul className={styles.listContainer}>
                    {categories.map((category, idx) => (
                      <li
                        key={category.id}
                        onMouseOver={() => setActiveCategoryIndex(idx)}
                      >
                        <Link
                          onClick={onClose}
                          href={category.link}
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
                        onClick={onClose}
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
                      <Link
                        onClick={onClose}
                        className={styles.category}
                        href="/special_offers/promo?filters[discountTypes][0]=Sale"
                      >
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
                    {categories[activeCategoryIndex]?.name}
                  </h3>
                  <div className={styles.content}>
                    <div className={styles.categoriesList}>
                      <div className={styles.categoriesColumn}>
                        {categories[activeCategoryIndex]?.subcategories
                          .slice(
                            0,
                            Math.ceil(
                              categories[activeCategoryIndex]?.subcategories
                                .length / 2,
                            ),
                          )
                          .map((subCategory) => (
                            <Category
                              onClick={onClose}
                              link={subCategory.link}
                              key={subCategory.id}
                              name={subCategory.name}
                              subCategories={subCategory.subcategories}
                            />
                          ))}
                      </div>
                      <div className={styles.catagoriesColumn}>
                        {categories[activeCategoryIndex]?.subcategories
                          .slice(
                            Math.ceil(
                              categories[activeCategoryIndex]?.subcategories
                                .length / 2,
                            ),
                          )
                          .map((subCategory) => (
                            <Category
                              onClick={onClose}
                              link={subCategory.link}
                              key={subCategory.id}
                              name={subCategory.name}
                              subCategories={subCategory.subcategories}
                            />
                          ))}
                      </div>
                    </div>
                    <Selections
                      items={categories[activeCategoryIndex]?.compilations}
                      onSelectClick={onClose}
                    />
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
        <div className={styles.overlay}></div>
      </>
    );
  },
);

CatalogPopup.displayName = 'CatalogPopup';
