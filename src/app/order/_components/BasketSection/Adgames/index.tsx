import React from 'react';
import styles from './Adgames.module.css';
import Image from 'next/image';
import GiftImage from '@images/gift.png';
type AdgamesProps = {};

export const Adgames: React.FC<AdgamesProps> = () => {
  return (
    <div className={styles.container}>
      <div className={styles.text}>
        <h3 className={styles.heading}>
          Участвуйте в рекламной игре и выигрывайте призы!
        </h3>
        <button className={styles.button} type="button">
          Принять участие
        </button>
      </div>
      <Image src={GiftImage} alt="Рекламные игры" width={78} height={78} />
    </div>
  );
};
