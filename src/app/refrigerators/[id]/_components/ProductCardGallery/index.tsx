'use client';
import React, { useState } from 'react';
import styles from './ProductCardGallery.module.css';
import { Swiper, SwiperClass, SwiperSlide } from 'swiper/react';
import NextImage from 'next/image';
import { Image } from '@prisma/client';
import { Navigation, Thumbs } from 'swiper/modules';
import ArrowUpIcon from '@icons/arrowUpIcon.svg';
import ArrowDownIcon from '@icons/arrowDownIcon.svg';

type ProductCardGalleryProps = {
  images: Image[];
};

export const ProductCardGallery: React.FC<ProductCardGalleryProps> = ({
  images,
}) => {
  const [previewsSwiper, setPreviewsSwiper] = useState<SwiperClass | null>(
    null,
  );
  images.sort((a, b) => Number(a.isMain) - Number(b.isMain));

  return (
    <div className={styles.content}>
      <div className={styles.miniatures}>
        <Swiper
          loop={true}
          slidesPerView={'auto'}
          spaceBetween={16}
          direction={'vertical'}
          grabCursor={true}
          navigation={{
            nextEl: `.${styles.arrowUp}`,
            prevEl: `.${styles.arrowDown}`,
          }}
          modules={[Navigation, Thumbs]}
          onSwiper={setPreviewsSwiper}
          watchSlidesProgress
          className={styles.swiper}
        >
          <button className={`${styles.arrow} ${styles.arrowUp}`}>
            <ArrowUpIcon />
          </button>
          <button className={`${styles.arrow} ${styles.arrowDown}`}>
            <ArrowDownIcon />
          </button>
          {images.map((image) => (
            <SwiperSlide key={image.id} style={{ height: '56px' }}>
              <div className={styles.miniature}>
                <NextImage
                  src={image.url}
                  alt={''}
                  fill
                  style={{ objectFit: 'contain' }}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className={styles.previews}>
        <Swiper
          loop={true}
          slidesPerView={1}
          className={styles.swiper}
          modules={[Thumbs]}
          thumbs={{
            swiper:
              previewsSwiper && !previewsSwiper.destroyed
                ? previewsSwiper
                : null,
            slideThumbActiveClass: styles.chosenSlide,
          }}
        >
          {images.map(({ id, url }) => (
            <SwiperSlide key={id}>
              <div>
                <NextImage
                  src={url}
                  alt={''}
                  fill
                  style={{ objectFit: 'contain' }}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};
