'use client';
import React from 'react';
import styles from './ReviewCarousel.module.css';
import { ArrowButton } from '@/components';
import { ReviewCard } from '../ReviewCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { ReviewType } from '@/types/reviewsModel';

type ReviewCarouselProps = {
  reviews: ReviewType[];
};

export const ReviewCarousel: React.FC<ReviewCarouselProps> = ({ reviews }) => {
  return (
    <div className={styles.body}>
      <ArrowButton
        direction="left"
        className={`${styles.arrowLeft} ${styles.disabledButton}`}
      />
      <Swiper
        breakpoints={{
          992: {
            slidesPerView: 5,
            slidesPerGroup: 5,
          },
        }}
        slidesPerView={'auto'}
        slidesPerGroup={1}
        spaceBetween={12}
        modules={[Navigation]}
        navigation={{
          nextEl: `.${styles.arrowRight}`,
          prevEl: `.${styles.arrowLeft}`,
          disabledClass: styles.disabledButton,
        }}
      >
        {reviews.map((review) => (
          <SwiperSlide key={review.id} className={styles.card}>
            <ReviewCard
              likesCount={review.likesCount}
              poster={review.poster}
              title={review.title}
              viewsCount={review.viewsCount}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <ArrowButton
        direction="right"
        className={`${styles.arrowRight} ${styles.disabledButton}`}
      />
    </div>
  );
};
