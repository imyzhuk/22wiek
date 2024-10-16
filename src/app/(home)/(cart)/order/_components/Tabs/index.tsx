import React, { useState } from 'react';
import styles from './Tabs.module.css';
import { useQueryParams } from '@/hooks';
import { useTypedSelector } from '@/hooks/useTypedSelector';

type TabsProps = {
  tabName: 'basket' | 'certifications';
};

export const Tabs: React.FC<TabsProps> = ({ tabName }) => {
  const { setQuery } = useQueryParams();
  const productsCount = useTypedSelector(
    (state) => state.cart.chosenProductsCount,
  );

  const onBasketTabClick = () => {
    setQuery('tab');
  };
  const onCertificationsTabClick = () => {
    setQuery('tab', 'certifications');
  };

  return (
    <div className={styles.tabs}>
      <button
        className={`${styles.tab} ${tabName === 'basket' ? styles.tabActive : ''}`}
        onClick={onBasketTabClick}
      >
        <span className={styles.tabBody}>
          <span className={styles.tabTitle}>Корзина</span>
          {Boolean(productsCount) && (
            <span className={styles.tabCounter}>{productsCount}</span>
          )}
        </span>
      </button>
      <button
        className={`${styles.tab} ${tabName === 'certifications' ? styles.tabActive : ''}`}
        onClick={onCertificationsTabClick}
      >
        <span className={styles.tabBody}>
          <span className={styles.tabTitle}>Сертификаты</span>
          {false && <span className={styles.tabCounter}>{0}</span>}
        </span>
      </button>
    </div>
  );
};
