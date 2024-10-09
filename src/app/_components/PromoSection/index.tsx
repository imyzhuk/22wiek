import React from 'react';
import styles from './PromoSection.module.css';
import { options, promoProducts } from '@/data/promo';
import { ArrowButton, Chips, ProductCard } from '@/components';
import { SectionHeader } from '..';

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
        <ArrowButton direction="left" isActive={false} />
        <ul className={styles.products}>
          {promoProducts.map((promoCard) => (
            <div key={promoCard.id} className={styles.product}>
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
            </div>
          ))}
        </ul>
        <ArrowButton direction="right" isActive />
      </div>
    </section>
  );
};
