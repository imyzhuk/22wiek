import React from 'react';
import styles from './Bonuses.module.css';
import WalletIcon from '@icons/walletIcon.svg';
import { formatPrice } from '@/utils';

type BonusesProps = {
  bonuses: number;
};

export const Bonuses: React.FC<BonusesProps> = ({ bonuses }) => {
  return (
    <div className={styles.container}>
      <WalletIcon />
      <div>
        <h3 className={styles.heading}>
          от {formatPrice(bonuses)} бонусных баллов
        </h3>
        <span className={styles.description}>на следующие покупки</span>
      </div>
    </div>
  );
};
