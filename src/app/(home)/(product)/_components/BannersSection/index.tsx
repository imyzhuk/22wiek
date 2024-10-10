import React from 'react';
import styles from './BannersSection.module.css';
import { BottomBanners } from './BottomBanners';
import { BannerCarousel } from './BannerCarousel';
import { prisma } from '@prisma/prisma-client';
import { Banner } from '@prisma/client';

type BannersSectionProps = {};

export const BannersSection: React.FC<BannersSectionProps> = async () => {
  const largeBanners: Banner[] = [];
  const bottomBanners: Banner[] = [];
  const banners = await prisma.banner.findMany();
  banners.forEach((banner) => {
    if (banner.size === 'Large') {
      largeBanners.push(banner);
    } else {
      bottomBanners.push(banner);
    }
  });
  return (
    <section>
      <BannerCarousel banners={largeBanners} />
      <BottomBanners banners={bottomBanners} />
    </section>
  );
};
