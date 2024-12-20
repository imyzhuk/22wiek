import React from 'react';
import styles from './ProductTabs.module.css';
import { Tabs } from '@/components';
import AlarmIcon from '@icons/alarmIcon.svg';

type ProductTabsProps = {
  tabs: {
    id: number;
    name: string;
    count?: number;
    link: string;
  }[];
};

// TODO: add a subscribe-to-price button and implement its mechanism

export const ProductTabs: React.FC<ProductTabsProps> = ({ tabs }) => {
  return (
    <div className={styles.tabContainer}>
      <Tabs tabs={tabs} />
      {false && (
        <button className={styles.subscribeToPriceButton}>
          <AlarmIcon />
          <span>Узнать о снижении цены</span>
        </button>
      )}
    </div>
  );
};
