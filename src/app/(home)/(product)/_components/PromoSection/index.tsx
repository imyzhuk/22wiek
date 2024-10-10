import React from 'react';
import styles from './PromoSection.module.css';
import { PromoCarousel } from './PromoCarousel';
import { prisma } from '@prisma/prisma-client';

type PromoSectionProps = {};

export const PromoSection: React.FC<PromoSectionProps> = async () => {
  const promoProducts = await prisma.product.findMany({
    where: {
      discountTypes: {
        isEmpty: false,
      },
    },
    include: {
      producer: true,
    },
    take: 20,
  });
  return (
    <section className={styles.section}>
      <PromoCarousel
        products={promoProducts.map((product) => ({
          ...product,
          price: Number(product.price),
          oldPrice: Number(product.oldPrice),
          rating: Number(product.rating),
        }))}
      />
    </section>
  );
};
