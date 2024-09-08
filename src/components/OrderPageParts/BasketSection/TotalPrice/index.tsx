import React from 'react';
import styles from './TotalPrice.module.css';
import { transformNumToPrice } from '@/utils/transformNumToPrice';
import { Bonuses } from './Bonuses';

type TotalPriceProps = {};

const mockData = {
  count: 2,
  delivery: null,
  totalPrice: 370,
  finishedPrice: 300,
  discount: 70,
  bonuses: 3,
};
export const TotalPrice: React.FC<TotalPriceProps> = () => {
  const [intTotalPricePart, decimalTotalPricePart] = transformNumToPrice(
    mockData.totalPrice,
  ).split(',');
  const [intFinishedPricePart, decimalFinishedPricePart] = transformNumToPrice(
    mockData.finishedPrice,
  ).split(',');
  const [intDiscountPart, decimalDiscountPart] = transformNumToPrice(
    mockData.discount,
  ).split(',');
  return (
    <div className={styles.wrapper}>
      <div className={styles.priceWrapper}>
        <span>Итого</span>
        <div>
          {intTotalPricePart},
          <span className={styles.priceDecimalPart}>
            {decimalTotalPricePart} р.
          </span>
        </div>
      </div>
      <div className={`${styles.row}`}>
        <span>Товары − {mockData.count} шт.</span>
        <div className={styles.finishedPrice}>
          {intFinishedPricePart},
          <span className={styles.priceDecimalPart}>
            {decimalFinishedPricePart} р.
          </span>
        </div>
      </div>
      <div className={`${styles.row} ${styles.secondRow}`}>
        <span>Доставка курьером</span>
        <span className={styles.deliveryStatus}>
          {mockData.delivery ?? 'Бесплатно'}
        </span>
      </div>
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
      <Bonuses bonuses={mockData.bonuses} />
      <button className={styles.button}>Оформить заказ</button>
      <p className={styles.description}>
        <span className={styles.asterisk}>*</span>{' '}
        <span>
          Способ и время доставки можно выбрать при оформлении заказа. Дата
          доставки заказа рассчитывается по максимальной дате доставки товаров в
          корзине.
        </span>
      </p>
    </div>
  );
};
