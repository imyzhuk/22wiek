import React from 'react';
import styles from './BottomBanners.module.css';
import { bottomBanners } from '@/data/banners';
import Link from 'next/link';

type BottomBannersProps = {};

export const BottomBanners: React.FC<BottomBannersProps> = () => {
  return (
    <ul className={styles.banners}>
      {bottomBanners.map((banner) => (
        <li key={banner.id} className={styles.banner}>
          <Link href={banner.link} className={styles.link}>
            <div className={styles.imgContainer}>
              <img className={styles.img} src={banner.img} alt={banner.title} />
            </div>
            <span className={styles.title}>{banner.title}</span>
            <span className={styles.description}>{banner.description}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
};
