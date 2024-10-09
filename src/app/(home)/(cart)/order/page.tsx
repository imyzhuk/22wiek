'use client';

import React from 'react';
import styles from './Order.module.css';
import { BasketSection, CertificationSection, Tabs } from './_components';
import { cartProducts, eCertificates } from '@/data/cart';
import { useSearchParams } from 'next/navigation';

type OrderProps = {};

const Order: React.FC<OrderProps> = () => {
  const searchParams = useSearchParams();

  let tabName = searchParams.get('tab') as 'certifications' | undefined;
  return (
    <div className={styles.container}>
      <Tabs
        productsCount={cartProducts.length}
        certificatesCount={eCertificates.length}
        tabName={tabName || 'basket'}
      />
      {tabName ? (
        <CertificationSection certificates={eCertificates} totalPrice={300} />
      ) : (
        <BasketSection products={cartProducts} />
      )}
    </div>
  );
};

export default Order;
