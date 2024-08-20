import React from 'react';
import Image from 'next/image';
import styles from './AdvantageCard.module.css';
import { AdvantageType } from '@/types/advantagesModel';

type AdvantageCardProps = Omit<AdvantageType, 'id'>;

export const AdvantageCard: React.FC<AdvantageCardProps> = ({
  title,
  desc,
  link,
  color,
  bgImg,
  img,
}) => {
  return (
    <li
      className={`${styles.card} ${styles[color]}`}
      style={{ backgroundImage: `url('./${bgImg}')` }}
    >
      <a href={link} className={styles.link}>
        <h6 className={styles.title}>{title}</h6>
        <p className={styles.desc}>{desc}</p>
        <Image alt={title} src={img} width={168} />
      </a>
    </li>
  );
};
