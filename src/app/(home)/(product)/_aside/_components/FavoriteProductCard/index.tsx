import React from 'react';
import styles from './FavoriteProductCard.module.css';
import { FavoriteProduct } from '@/types/favoriteProductModel';
import Link from 'next/link';

type FavoriteProductCardProps = FavoriteProduct;

export const FavoriteProductCard: React.FC<FavoriteProductCardProps> = ({
  name,
  link,
  image,
  hasPresent,
  hasSuperprice,
  discount,
  code,
  rating,
  packPrice,
}) => {
  const { format: formatCode } = new Intl.NumberFormat('de');

  return (
    <li className={styles.card}>
      <Link href={link} className={styles.imgLink}>
        <span
          className={`${styles.label} ${hasPresent ? styles.presentLabel : ''} ${hasSuperprice ? styles.superpriceLabel : ''} ${discount ? styles.discountLabel : ''}`}
        ></span>
        <span className={styles.imageContainer}>
          <img src={image} alt={name} className={styles.image} />
        </span>
      </Link>
      <div className={styles.info}>
        <Link href={link} className={styles.title}>
          {name}
        </Link>
        <div className={styles.code}>код {formatCode(code)}</div>
        <div className={styles.ratingWrapper}>
          <span
            className={styles.rating}
            style={{ width: `${Number(rating) * 20}%` }}
          ></span>
        </div>
        <div className={styles.priceWrapper}>
          <span>{Number(packPrice).toFixed(2)}</span>
          <span className={styles.currency}>р.</span>
        </div>
        <button className={styles.basketButton}>В корзину</button>
        <button className={styles.removeButton}>Удалить из списка</button>
      </div>
    </li>
  );
};
