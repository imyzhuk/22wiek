import React from 'react';
import styles from './MobileLabels.module.css';
import { Labels } from '../Labels';

type MobileLabelsProps = {
  guarantee: string;
  discount: number | null;
};

export const MobileLabels: React.FC<MobileLabelsProps> = ({
  discount,
  guarantee,
}) => {
  let { format } = new Intl.NumberFormat('ru', {
    maximumFractionDigits: 2,
  });
  const labels = [];
  if (discount) {
    labels.push({
      id: 0,
      name: `Скидка ${format(discount)}р.`,
    });
  }
  if (guarantee) {
    labels.push({
      id: 1,
      name: guarantee,
    });
  }
  return (
    <div className={styles.container}>
      <Labels items={labels} />
    </div>
  );
};
