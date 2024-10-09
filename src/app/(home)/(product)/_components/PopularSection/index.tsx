import React from 'react';
import styles from './PopularSection.module.css';
import { Chips, ProductCard } from '@/components';
import { SectionHeader } from '..';
import { options } from '@/data/popular';
import { popularProducts } from '@/data/products';
import Link from 'next/link';

type PopularSectionProps = {};

export const PopularSection: React.FC<PopularSectionProps> = () => {
  const elementsInRow = 5;
  const IndexOfElementWithputBottomBorder =
    Math.floor((popularProducts.length - 1) / elementsInRow) * elementsInRow;

  return (
    <section className={styles.section}>
      <SectionHeader
        title="Популярные"
        link="/special_offers/recommend.html"
        linkText="Смотреть все"
      >
        <Chips options={options} />
      </SectionHeader>
      <ul className={styles.products}>
        {popularProducts.map((popularProduct, idx) => (
          <div
            key={popularProduct.id}
            className={`${styles.product} ${idx === IndexOfElementWithputBottomBorder ? styles.noBottomBorder : ''}`}
          >
            <ProductCard
              id={popularProduct.id}
              currentPrice={popularProduct.currentPrice}
              productImg={popularProduct.productImg}
              productLink={popularProduct.productLink}
              title={popularProduct.title}
              type={popularProduct.type}
              discount={popularProduct.discount}
              discountType={popularProduct.discountType}
              hasLikeButton
            />
          </div>
        ))}
      </ul>
      <button className={styles.moreButton}>Показать еще</button>
      <Link href="/special_offers/recommend" className={styles.allButton}>
        Смотреть все
      </Link>
    </section>
  );
};
