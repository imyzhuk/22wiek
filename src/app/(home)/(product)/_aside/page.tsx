import React, { Fragment } from 'react';
import styles from './Aside.module.css';
import { favoriteProducts } from '@/data/favoriteProducts';
import { FavoriteProductCards } from './_components';

/* TODO: finish the page */
function Aside() {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h2 className={styles.title}>Избранные товары</h2>
        {!favoriteProducts && (
          <div className={styles.emptyContent}>Нет избранных товаров</div>
        )}
        {favoriteProducts && (
          <FavoriteProductCards products={favoriteProducts} />
        )}
      </div>
    </div>
  );
}

export default Aside;
