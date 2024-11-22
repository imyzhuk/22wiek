import React from 'react';
import styles from './ProductCardSkeleton.module.css';

type ProductCardSkeletonProps = {};

export const ProductCardSkeleton: React.FC<ProductCardSkeletonProps> = () => {
  return (
    <div className={styles.cardSkeleton}>
      <div className={styles.imageSkeleton}></div>
      <div className={styles.discountSkeleton}></div>
      <div className={styles.priceSkeleton}></div>
      <div className={styles.titleSkeleton}></div>
      <div className={styles.deliverySkeleton}></div>
      <div className={styles.buttonSkeleton}></div>
    </div>
  );
};
