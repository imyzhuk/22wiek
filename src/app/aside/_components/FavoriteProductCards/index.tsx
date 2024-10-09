import React, { Fragment } from 'react';
import styles from './FavoriteProductCards.module.css';
import { FavoriteProduct } from '@/types/favoriteProductModel';
import { FavoriteProductCard } from '..';

type FavoriteProductCardsProps = {
  products: FavoriteProduct[];
};

export const FavoriteProductCards: React.FC<FavoriteProductCardsProps> = ({
  products,
}) => {
  return (
    <ul className={styles.products}>
      {products.map((product, idx) => (
        <Fragment key={product.id}>
          {idx % 2 === 0 && <hr className={styles.separator} />}
          <FavoriteProductCard {...product} />
        </Fragment>
      ))}
    </ul>
  );
};
