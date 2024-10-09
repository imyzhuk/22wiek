import React from 'react';
import styles from './Bonuses.module.css';
import WalletIcon from '@icons/walletIcon.svg';
import { transformNumToPrice } from '@/utils/transformNumToPrice';

type BonusesProps = {
  bonuses: number;
};

export const Bonuses: React.FC<BonusesProps> = ({ bonuses }) => {
  return (
    <div className={styles.container}>
      <WalletIcon />
      <div>
        <h3 className={styles.heading}>
          от {transformNumToPrice(bonuses)} бонусных баллов
        </h3>
        <span className={styles.description}>на следующие покупки</span>
      </div>
    </div>
  );
};
