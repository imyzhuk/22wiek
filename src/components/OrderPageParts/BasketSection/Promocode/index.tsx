import React from 'react';
import styles from './Promocode.module.css';
import { Input } from '@/components';
import RightArrow from '@Images/rightArrow.svg';

type PromocodeProps = {};

export const Promocode: React.FC<PromocodeProps> = () => {
  return (
    <div className={styles.container}>
      <Input
        placeholder="Введите промокод"
        onChange={() => null}
        className={styles.input}
      />
      <button className={styles.button}>
        <RightArrow />
      </button>
    </div>
  );
};
