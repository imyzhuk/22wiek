import React from 'react';
import styles from './PopularSection.module.css';
import { PopularProducts } from './PopularProducts';
import { prisma } from '@prisma/prisma-client';

type PopularSectionProps = {};

export const PopularSection: React.FC<PopularSectionProps> = async () => {
  const elementsInRow = 5;
  const popularProducts = await prisma.product.findMany({
    where: {
      NOT: {
        isInStock: false,
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
      isInStock: true,
    },
    take: 30,
    orderBy: {
      ordersCount: 'desc',
    },
  });
  return (
    <section className={styles.section}>
      <PopularProducts
        elementsInRow={elementsInRow}
        products={popularProducts.map((product) => ({
          ...product,
          price: Number(product.price),
          oldPrice: Number(product.oldPrice),
        }))}
      />
    </section>
  );
};
