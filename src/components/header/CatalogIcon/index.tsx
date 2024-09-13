import React from 'react';
import styles from './CatalogIcon.module.css';

type CatalogIconProps = {};

export const CatalogIcon: React.FC<CatalogIconProps> = () => {
  return (
    <div className={`${styles.catalogIcon} ${styles.catalogIconAnimated}`}>
      <div className={styles.square}>
        <div className={styles.oneSquarePart}></div>
      </div>
      <div className={styles.square}>
        <div className={styles.twoSquarePart}></div>
      </div>
      <div className={styles.square}>
        <div className={styles.threeSquarePart}></div>
      </div>
      <div className={styles.square}>
        <div className={styles.fourSquarePart}></div>
      </div>
    </div>
  );
};
