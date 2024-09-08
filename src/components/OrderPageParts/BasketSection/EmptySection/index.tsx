import React from 'react';
import styles from './EmptySection.module.css';
import CrossedBasket from '@Images/crossedBasket.svg';

type EmptySectionProps = {};

export const EmptySection: React.FC<EmptySectionProps> = () => {
  return (
    <div className={styles.container}>
      <CrossedBasket className={styles.icon} />
      <h2 className={styles.title}>Корзина пуста</h2>
      <p className={styles.description}>
        Вы можете выбрать товары в каталоге, воспользоваться поиском или
        обратить внимание на просмотренные товары ниже.
      </p>
    </div>
  );
};
