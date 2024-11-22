import React from 'react';
import styles from './BasketSectionSkeleton.module.css';

type BasketSectionSkeletonProps = {};

export const BasketSectionSkeleton: React.FC<
  BasketSectionSkeletonProps
> = () => {
  return (
    <div className={styles.section}>
      <div className={styles.productsContainer}>
        <div className={styles.firstRow}>
          <div className={styles.checkboxSkeleton}></div>
          <div className={styles.firstRowButtons}>
            <div className={styles.firstRowButton}></div>
            <div className={styles.firstRowButton}></div>
          </div>
        </div>
        {Array.from({ length: 3 }).map((_, index) => {
          return (
            <div className={styles.product} key={index}>
              <div className={styles.checkboxWrapper}>
                <div className={styles.checkboxSkeleton}></div>
              </div>
              <div className={styles.info}>
                <div className={styles.topBlock}>
                  <div className={styles.imgSkeleton}></div>
                  <div className={styles.productInfo}>
                    <div className={styles.titleSkeleton}></div>
                    <div className={styles.counterSkeleton}></div>
                    <div className={styles.priceSkeleton}></div>
                  </div>
                </div>
                <div className={styles.bottomBlock}>
                  <ul className={styles.details}>
                    <li className={styles.detailSkeleton}></li>
                  </ul>
                  <div className={styles.servicesBlock}>
                    <div className={styles.servicesSkeleton}></div>
                  </div>
                  <div className={styles.deletingButtonsSkeleton}></div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className={styles.rightColumn}>
        <div className={styles.totalPriceBlock}>
          <div className={styles.totalPriceText}></div>
          <div className={styles.totalPriceSeparator}></div>
          <div className={styles.totalPriceCount}></div>
          <div className={styles.totalPriceButton}></div>
          <div className={styles.totalPriceInfo}>
            <div className={styles.totalPriceInfoRow}></div>
            <div className={styles.totalPriceInfoRow}></div>
            <div className={styles.totalPriceInfoRow}></div>
          </div>
        </div>
      </div>
    </div>
  );
};
