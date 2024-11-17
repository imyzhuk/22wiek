import React from 'react';
import styles from './StaticBlock.module.css';
import InfoIcon from '@icons/info.svg';
import { CartButton } from '@/components';
import { formatPrice } from '@/utils';

type StaticBlockProps = {
  price: number;
  oldPrice: number;
  id: number;
};

export const StaticBlock: React.FC<StaticBlockProps> = ({
  price,
  oldPrice,
  id,
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.priceContainer}>
        <div className={styles.price}>
          {Boolean(oldPrice) && (
            <span className={styles.oldPrice}>{formatPrice(oldPrice)} р.</span>
          )}
          <span>{formatPrice(price)} р.</span>
        </div>
        <InfoIcon style={{ color: '#e52e6b' }} />
      </div>
      <CartButton id={id} />
    </div>
  );
};
