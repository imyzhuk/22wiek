'use client';
import React from 'react';
import styles from './BannerCarousel.module.css';
import { ArrowButton } from '@/components';
import Image from 'next/image';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Banner } from '@prisma/client';

type BannerCarouselProps = {
  banners: Banner[];
};

export const BannerCarousel: React.FC<BannerCarouselProps> = ({ banners }) => {
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
        {banners.map((banner) => (
          <SwiperSlide className={styles.banner} key={banner.id}>
            <div>
              <Image
                src={banner.image}
                width={1090}
                height={360}
                alt={banner.title}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className={styles.bullets}>
        {banners.map((el, idx) => (
          <span key={idx} className={styles.bullet}></span>
        ))}
      </div>
      <ArrowButton direction="left" className={styles.arrowLeft} />
      <ArrowButton direction="right" className={styles.arrowRight} />
    </div>
  );
};
