import React from 'react';
import styles from './BottomBanners.module.css';
import Link from 'next/link';
import { Banner } from '@prisma/client';

type BottomBannersProps = {
  banners: Banner[];
};

export const BottomBanners: React.FC<BottomBannersProps> = ({ banners }) => {
  return (
    <ul className={styles.banners}>
      {banners.map((banner) => (
        <li key={banner.id} className={styles.banner}>
          <Link href={banner.link} className={styles.link}>
            <div className={styles.imgContainer}>
              <img
                className={styles.img}
                src={banner.image}
                alt={banner.title}
              />
            </div>
            <span className={styles.title}>{banner.title}</span>
            <span className={styles.description}>{banner.description}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
};
