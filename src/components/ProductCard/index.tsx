import React from 'react';
import styles from './ProductCard.module.css';
import { ProductCardType } from '@/types/productCardModel';
import { ProductCardButton } from '@/components';
import { LikeButton } from './LikeButton';
import Link from 'next/link';

type ProductCardProps = ProductCardType & {
  hasLikeButton?: boolean;
};

export const ProductCard: React.FC<ProductCardProps> = ({
  discount,
  productImg,
  type,
  currentPrice,
  oldPrice,
  title,
  productLink,
  discountType,
  id,
  hasLikeButton,
}) => {
  return (
    <li className={styles.product}>
      {hasLikeButton && <LikeButton />}
      <div className={styles.wrapper}>
        <Link href={productLink} className={styles.imgLink}>
          <span className={styles.imgContainer}>
            <img className={styles.img} src={productImg} alt={type} />
          </span>
        </Link>
        <div className={styles.info}>
          {Boolean(discount) && (
            <div className={styles.discount}>-{discount}%</div>
          )}
          <div className={styles.pricesWrapper}>
            <p className={styles.currentPrice}>{currentPrice}</p>
            {Boolean(oldPrice) && <p className={styles.oldPrice}>{oldPrice}</p>}
          </div>
          {discountType && (
            <div className={styles.discountType}>{discountType}</div>
          )}
        </div>
        <Link href={productLink} className={styles.description}>
          {title}
        </Link>
        <div className={styles.productStatus}>
          <svg
            className={styles.productStatusIcon}
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
          >
            <path
              d="M2.5 3.5V12.5C2.5 13.0523 2.94771 13.5 3.5 13.5H12.5C13.0523 13.5 13.5 13.0523 13.5 12.5V3.5C13.5 2.94772 13.0523 2.5 12.5 2.5H3.5C2.94772 2.5 2.5 2.94771 2.5 3.5Z"
              stroke="currentColor"
              strokeWidth="1.2"
            ></path>
            <path
              d="M2.5 6.5H13.5"
              stroke="currentColor"
              strokeWidth="1.2"
            ></path>
            <path
              d="M5.5 1.5V4"
              stroke="currentColor"
              strokeWidth="1.2"
              strokeLinecap="round"
            ></path>
            <path
              d="M10.5 1.5V4"
              stroke="currentColor"
              strokeWidth="1.2"
              strokeLinecap="round"
            ></path>
          </svg>
          <span className={styles.statusText}>
            <span className={styles.deliveryDetails}>Курьером – Завтра</span>
            <span className={styles.deliveryDetails}>Самовывоз – Завтра</span>
          </span>
        </div>
      </div>
      <ProductCardButton id={id} />
    </li>
  );
};
