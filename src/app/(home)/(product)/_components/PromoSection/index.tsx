'use client';
import React from 'react';
import styles from './PromoSection.module.css';
import { options, promoProducts } from '@/data/promo';
import { ArrowButton, Chips, ProductCard } from '@/components';
import { SectionHeader } from '..';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

type PromoSectionProps = {};

export const PromoSection: React.FC<PromoSectionProps> = () => {
  return (
    <section className={styles.section}>
      <SectionHeader
        title="Все акции"
        link="/special_offers/promo"
        linkText="Смотреть все"
      >
        <Chips options={options} />
      </SectionHeader>
      <div className={styles.body}>
        <ArrowButton
          direction="left"
          className={`${styles.arrowLeft} ${styles.disabledButton}`}
        />
        <Swiper
          className={styles.products}
          slidesPerView={5}
          slidesPerGroup={5}
          modules={[Navigation]}
          navigation={{
            nextEl: `.${styles.arrowRight}`,
            prevEl: `.${styles.arrowLeft}`,
            disabledClass: styles.disabledButton,
          }}
        >
          {promoProducts.map((promoCard) => (
            <SwiperSlide key={promoCard.id} className={styles.product}>
              <ProductCard
                id={promoCard.id}
                currentPrice={promoCard.currentPrice}
                productImg={promoCard.productImg}
                productLink={promoCard.productLink}
                title={promoCard.title}
                type={promoCard.type}
                discount={promoCard.discount}
                discountType={promoCard.discountType}
                hasLikeButton
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <ArrowButton
          direction="right"
          className={`${styles.arrowRight} ${styles.disabledButton}`}
        />
      </div>
    </section>
  );
};
