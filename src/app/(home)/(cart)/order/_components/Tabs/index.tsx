import React, { useState } from 'react';
import styles from './Tabs.module.css';
import { useQueryParams } from '@/hooks';

type TabsProps = {
  productsCount: number;
  certificatesCount: number;
  tabName: 'basket' | 'certifications';
};

export const Tabs: React.FC<TabsProps> = ({
  productsCount,
  tabName,
  certificatesCount,
}) => {
  const { setQuery } = useQueryParams();

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
          {certificatesCount && (
            <span className={styles.tabCounter}>{certificatesCount}</span>
          )}
        </span>
      </button>
    </div>
  );
};
