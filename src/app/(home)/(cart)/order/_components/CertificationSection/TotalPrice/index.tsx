import React from 'react';
import styles from './TotalPrice.module.css';
import { formatPrice } from '@/utils';
import EnvelopeIcon from '@icons/envelopeIcon.svg';

type TotalPriceProps = {
  totalPrice: number;
};

export const TotalPrice: React.FC<TotalPriceProps> = ({ totalPrice }) => {
  const [intTotalPricePart, decimalTotalPricePart] =
    formatPrice(totalPrice).split(',');

  return (
    <div className={styles.wrapper}>
      <div className={styles.price}>
        {intTotalPricePart},
        <span className={styles.decimalPart}>{decimalTotalPricePart} р.</span>
      </div>
      <div className={styles.title}>Стоимость заказа</div>
      <button className={styles.button}>Оформить заказ</button>
      <p className={styles.description}>
        <span className={styles.icon}>
          <EnvelopeIcon />
        </span>
        <span>
          Сертификаты будут отправлены на почту, viber или по SMS после оплаты
        </span>
      </p>
    </div>
  );
};
