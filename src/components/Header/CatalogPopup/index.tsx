import React, { forwardRef, useState } from 'react';
import styles from './CatalogPopup.module.css';
import { Selections } from './Selections';
import { Category } from './Category';
import KitchenIcon from '@icons/kitchenIcon.svg';
import AllPromoIcon from '@icons/allPromoIcon.svg';
import ProcentIcon from '@icons/procentIcon.svg';
import { Loader } from '@/components';
import Link from 'next/link';
import { useGetCatalog } from '@/hooks';

type CatalogPopupProps = {
  onClose: () => void;
};

export const CatalogPopup = forwardRef<HTMLDivElement, CatalogPopupProps>(
  ({ onClose }, ref) => {
    const [activeCategoryIndex, setActiveCategoryIndex] = useState(0);
    const { isLoading, catalog } = useGetCatalog();

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
                    {catalog.map((category, idx) => (
                      <li
                        key={category.id}
                        onMouseOver={() => setActiveCategoryIndex(idx)}
                      >
                        <span
                          className={`${styles.category} ${activeCategoryIndex === idx ? styles.activeCategory : ''}`}
                        >
                          <span className={styles.icon}>
                            <KitchenIcon />
                          </span>
                          <span className={styles.categoryName}>
                            {category.name}
                          </span>
                        </span>
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
                    {catalog[activeCategoryIndex]?.name}
                  </h3>
                  <div className={styles.content}>
                    <div className={styles.categoriesList}>
                      <div className={styles.categoriesColumn}>
                        {catalog[activeCategoryIndex]?.subcategories
                          .slice(
                            0,
                            Math.ceil(
                              catalog[activeCategoryIndex]?.subcategories
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
                        {catalog[activeCategoryIndex]?.subcategories
                          .slice(
                            Math.ceil(
                              catalog[activeCategoryIndex]?.subcategories
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
                      items={catalog[activeCategoryIndex]?.compilations}
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
