'use client';

import React from 'react';
import styles from './Order.module.css';
import { BasketSection, Tabs } from '@/components/OrderPageParts';
import { cartProducts } from '@/data/cart';
import { useSearchParams } from 'next/navigation';

type OrderProps = {};

const Order: React.FC<OrderProps> = () => {
  const searchParams = useSearchParams();

  let tabName = searchParams.get('tab') as 'certifications' | undefined;
  return (
    <main className={styles.main}>
      <Tabs productsCount={cartProducts.length} tabName={tabName || 'basket'} />
      {tabName ? '' : <BasketSection products={cartProducts} />}
    </main>
  );
};

export default Order;
