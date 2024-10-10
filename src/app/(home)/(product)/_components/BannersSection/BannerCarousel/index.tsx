'use client';
import React from 'react';
import styles from './BannerCarousel.module.css';
import { largeBanners } from '@/data/banners';
import { ArrowButton } from '@/components';
import Image from 'next/image';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

type BannerCarouselProps = {};

export const BannerCarousel: React.FC<BannerCarouselProps> = () => {
  return (
    <div className={styles.bannersContainer}>
      <Swiper
        className={styles.banners}
        loop
        modules={[Navigation, Pagination, Autoplay]}
        navigation={{
          nextEl: `.${styles.arrowRight}`,
          prevEl: `.${styles.arrowLeft}`,
        }}
        pagination={{
          clickable: true,
          el: `.${styles.bullets}`,
          bulletClass: styles.bullet,
          bulletActiveClass: styles.activeBullet,
        }}
        autoplay={{
          delay: 6000,
        }}
      >
        {largeBanners.map((banner) => (
          <SwiperSlide className={styles.banner} key={banner.id}>
            <Link href="/special_offers/promo">
              <Image
                src={banner.link}
                width={1090}
                height={360}
                alt={banner.altText}
              />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className={styles.bullets}>
        {largeBanners.map((el, idx) => (
          <span key={idx} className={styles.bullet}></span>
        ))}
      </div>
      <ArrowButton direction="left" isActive className={styles.arrowLeft} />
      <ArrowButton direction="right" isActive className={styles.arrowRight} />
    </div>
  );
};
