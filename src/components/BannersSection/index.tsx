import React from 'react';
import styles from './BannersSection.module.css';
import { largeBanners } from '@/data/banners';
import { ArrowButton } from '@/components';
import Image from 'next/image';
import { BottomBanners } from './BottomBanners';

type BannersSectionProps = {};

export const BannersSection: React.FC<BannersSectionProps> = () => {
  return (
    <section className={styles.section}>
      <div className={styles.bannersContainer}>
        <ul className={styles.banners}>
          {largeBanners.map((banner) => (
            <li className={styles.banner} key={banner.id}>
              <a href="/special_offers/promo">
                <Image
                  src={banner.link}
                  width={1090}
                  height={360}
                  alt={banner.altText}
                />
              </a>
            </li>
          ))}
        </ul>
        <div className={styles.bullets}>
          {largeBanners.map((el, idx) => (
            <span
              key={idx}
              className={`${styles.bullet} ${!idx ? styles.activeBullet : ''}`}
            ></span>
          ))}
        </div>
        <ArrowButton direction="left" isActive />
        <ArrowButton direction="right" isActive />
      </div>
      <BottomBanners />
    </section>
  );
};
