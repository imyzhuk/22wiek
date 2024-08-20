import React from 'react';
import styles from './ProductCard.module.css';
import { ProductCardType } from '@/types/productCardModel';
import { ProductCardButton } from '@/components';

type ProductCardProps = ProductCardType;

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
}) => {
  return (
    <li className={styles.product}>
      <button className={styles.likeButton}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="24"
          height="24"
          fill="none"
          className=""
        >
          <path
            xmlns="http://www.w3.org/2000/svg"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M6.53761 7.66594C6.07752 8.21805 5.79995 8.96093 5.79995 9.69226C5.79995 10.0297 5.95246 10.4874 6.32604 11.0805C6.69251 11.6622 7.22322 12.2988 7.86556 12.9778C8.66346 13.8213 9.56354 14.6614 10.4701 15.5077C10.9575 15.9626 11.4468 16.4193 11.923 16.8792C12.3993 16.4193 12.8886 15.9626 13.3759 15.5077C14.2825 14.6614 15.1826 13.8213 15.9805 12.9778C16.6228 12.2988 17.1535 11.6622 17.52 11.0805C17.8936 10.4874 18.0461 10.0297 18.0461 9.69226C18.0461 8.96093 17.7685 8.21805 17.3084 7.66594C16.8518 7.11798 16.2555 6.79995 15.6153 6.79995C14.1209 6.79995 13.4034 7.49712 12.4887 8.41179C12.3387 8.56182 12.1352 8.6461 11.923 8.6461C11.7109 8.6461 11.5074 8.56182 11.3573 8.41179C10.4427 7.49712 9.72512 6.79995 8.23072 6.79995C7.59051 6.79995 6.99424 7.11798 6.53761 7.66594ZM5.30845 6.64165C6.00566 5.805 7.02478 5.19995 8.23072 5.19995C10.0058 5.19995 11.0834 5.94938 11.923 6.72841C12.7626 5.94938 13.8403 5.19995 15.6153 5.19995C16.8213 5.19995 17.8404 5.805 18.5376 6.64165C19.2314 7.47416 19.6461 8.57744 19.6461 9.69226C19.6461 10.4698 19.3137 11.2349 18.8738 11.9333C18.4267 12.643 17.8152 13.3666 17.1428 14.0773C16.3226 14.9444 15.3422 15.8607 14.4 16.7413C13.8267 17.2772 13.2675 17.7999 12.7671 18.2902C12.2983 18.7496 11.5478 18.7496 11.0789 18.2902C10.5786 17.7999 10.0194 17.2772 9.44602 16.7413C8.50383 15.8607 7.52343 14.9444 6.70323 14.0773C6.03085 13.3666 5.41934 12.643 4.97226 11.9333C4.5323 11.2349 4.19995 10.4698 4.19995 9.69226C4.19995 8.57744 4.61469 7.47416 5.30845 6.64165Z"
            fill="currentColor"
          ></path>
        </svg>
      </button>
      <a href="/educational_literature/45_aversev.html" className={styles.imgLink}>
        <span className={styles.imgContainer}>
          <img className={styles.img} src={productImg} alt={type} />
        </span>
      </a>
      <div className={styles.info}>
        {discount && <div className={styles.discount}>-{discount}%</div>}
        <div className={styles.pricesWrapper}>
          <p className={styles.currentPrice}>{currentPrice}</p>
          <p className={styles.oldPrice}>{oldPrice}</p>
        </div>
        {discountType && <div className={styles.discountType}>{discountType}</div>}
      </div>
      <a href={productLink} className={styles.description}>
        {title}
      </a>
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
          <path d="M2.5 6.5H13.5" stroke="currentColor" strokeWidth="1.2"></path>
          <path d="M5.5 1.5V4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"></path>
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
      <ProductCardButton id={id} />
    </li>
  );
};
