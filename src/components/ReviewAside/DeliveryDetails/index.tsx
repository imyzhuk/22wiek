import React from 'react';
import styles from './DeliveryDetails.module.css';
import Link from 'next/link';
import ArrowUpIcon from '@icons/arrowUpIcon.svg';

type DeliveryDetailsProps = {};

export const DeliveryDetails: React.FC<DeliveryDetailsProps> = () => {
  return (
    <div className={styles.container}>
      <div className={styles.headline}>
        <span className={styles.title}>Доставка</span>
        <button className={styles.titleButton}>по г. Минск</button>
      </div>
      <div className={styles.deliveryList}>
        <div className={styles.deliveryItem}>
          <div className={styles.description}>
            <p className={styles.itemTitle}>Курьером в ваше время</p>
            <p className={styles.itemBody}>доставим заказ в удобный для вас</p>
          </div>
        </div>
        <div className={styles.deliveryItem}>
          <div className={styles.description}>
            <p className={styles.itemTitle}>Курьером</p>
            <p className={`${styles.itemBody} ${styles.green}`}>завтра</p>
          </div>
          <p className={styles.price}>бесплатно</p>
          <Link href="/services/delivery" className={styles.itemLink}>
            <ArrowUpIcon className={styles.arrow} />
          </Link>
        </div>
        <div className={styles.deliveryItem}>
          <div className={styles.description}>
            <p className={styles.itemTitle}>Самовывоз</p>
            <p className={`${styles.itemBody} ${styles.green}`}>завтра</p>
          </div>
          <p className={styles.price}>бесплатно</p>
          <Link href="/self_delivery/" className={styles.itemLink}>
            <ArrowUpIcon className={styles.arrow} />
          </Link>
        </div>
      </div>
    </div>
  );
};
