import React, { Fragment } from 'react';
import styles from './Aside.module.css';
import { favoriteProducts } from '@/data/favoriteProducts';
import { FavoriteProductCards } from './_components';
import { Footer } from '@/components';

function Aside() {
  return (
    <>
      <main className={styles.main}>
        <div className={styles.wrapper}>
          <h2 className={styles.title}>Избранные товары</h2>
          {!favoriteProducts && (
            <div className={styles.emptyContent}>Нет избранных товаров</div>
          )}
          {favoriteProducts && (
            <FavoriteProductCards products={favoriteProducts} />
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Aside;
