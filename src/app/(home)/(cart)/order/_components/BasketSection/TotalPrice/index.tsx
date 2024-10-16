import React from 'react';
import styles from './TotalPrice.module.css';
import { formatPrice } from '@/utils';
import { Loader } from '../..';

type TotalPriceProps = {
  totalPrice: number;
  finishedPrice: number;
  discount: number;
  totalProductsCount: number;
  isLoading: boolean;
  delivery?: Date;
};

export const TotalPrice: React.FC<TotalPriceProps> = ({
  totalPrice,
  finishedPrice,
  discount,
  totalProductsCount,
  isLoading,
  delivery,
}) => {
  const [intTotalPricePart, decimalTotalPricePart] =
    formatPrice(totalPrice).split(',');
  const [intFinishedPricePart, decimalFinishedPricePart] =
    formatPrice(finishedPrice).split(',');
  const [intDiscountPart, decimalDiscountPart] =
    formatPrice(discount).split(',');
  return (
    <div className={styles.wrapper}>
      {isLoading && <Loader color="var(--pink-500)" />}
      <div className={styles.priceWrapper}>
        <span>Итого</span>
        {finishedPrice ? (
          <div>
            {intFinishedPricePart},
            <span className={styles.priceDecimalPart}>
              {decimalFinishedPricePart} р.
            </span>
          </div>
        ) : (
          <div className={styles.priceLine}></div>
        )}
      </div>
      {totalProductsCount ? (
        <div className={styles.row}>
          <span>Товары − {totalProductsCount} шт.</span>
          <div className={styles.finishedPrice}>
            {intTotalPricePart},
            <span className={styles.priceDecimalPart}>
              {decimalTotalPricePart} р.
            </span>
          </div>
        </div>
      ) : (
        <div className={`${styles.row} ${styles.grayRow}`}>
          <span>Товары</span>
          <div className={styles.priceLine}></div>
        </div>
      )}
      {delivery && (
        <div className={`${styles.row} ${styles.secondRow}`}>
          <span>Доставка курьером</span>
          <span className={styles.deliveryStatus}>
            {delivery.toDateString() ?? 'Бесплатно'}
          </span>
        </div>
      )}
      {Boolean(discount) && (
        <div className={`${styles.row} ${styles.thirdRow}`}>
          <span>Скидка</span>
          <div className={styles.discount}>
            <span className={styles.discountLine}>− </span>
            {intDiscountPart},
            <span className={styles.priceDecimalPart}>
              {decimalDiscountPart} р.
            </span>
          </div>
        </div>
      )}
      <button className={styles.button} disabled={!totalProductsCount}>
        Оформить заказ
      </button>
      <p className={styles.description}>
        <span className={styles.asterisk}>*</span>{' '}
        <span>
          {totalProductsCount
            ? 'Способ и время доставки можно выбрать при оформлении заказа. Дата доставки заказа рассчитывается по максимальной дате доставки товаров в корзине.'
            : 'Выберите товары, чтобы перейти к оформлению заказа'}
        </span>
      </p>
    </div>
  );
};
