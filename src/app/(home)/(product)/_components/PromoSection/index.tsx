import React from 'react';
import styles from './PromoSection.module.css';
import { PromoCarousel } from './PromoCarousel';
import { prisma } from '@prisma/prisma-client';

type PromoSectionProps = {};

export const PromoSection: React.FC<PromoSectionProps> = async () => {
  const promoProducts = await prisma.product.findMany({
    where: {
      NOT: {
        isInStock: false,
      },
      discountTypes: {
        isEmpty: false,
      },
    },
    select: {
      id: true,
      name: true,
      discount: true,
      discountTypes: true,
      price: true,
      oldPrice: true,
      preview: true,
      link: true,
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
        }))}
      />
    </section>
  );
};
