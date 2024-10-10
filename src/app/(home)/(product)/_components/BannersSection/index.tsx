import React from 'react';
import styles from './BannersSection.module.css';
import { BottomBanners } from './BottomBanners';
import { BannerCarousel } from './BannerCarousel';

type BannersSectionProps = {};

export const BannersSection: React.FC<BannersSectionProps> = () => {
  return (
    <section>
      <BannerCarousel />
      <BottomBanners />
    </section>
  );
};
