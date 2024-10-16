'use client';

import React, { useState } from 'react';
import styles from './Container.module.css';
import { BasketSection, CertificationSection, Tabs } from '../';
import { eCertificates } from '@/data/cart';
import { useSearchParams } from 'next/navigation';
import { CartItemWithProduct } from '@/types/cart';

type ContainerProps = {
  cartItems: CartItemWithProduct[];
};

const Container: React.FC<ContainerProps> = ({ cartItems }) => {
  const searchParams = useSearchParams();
  const [cartItemsCountForTabs, setCartItemsCountForTabs] = useState(
    cartItems.reduce((sum, { quantity }) => sum + quantity, 0),
  );

  let tabName = searchParams.get('tab') as 'certifications' | undefined;
  const totalPrice = cartItems.reduce((acc, { quantity, product }) => {
    const price = product.oldPrice || product.price;
    return acc + quantity * price;
  }, 0);
  const finishedPrice = cartItems.reduce((acc, { quantity, product }) => {
    return acc + quantity * product.price;
  }, 0);
  const discount = totalPrice - finishedPrice;

  return (
    <div className={styles.container}>
      <Tabs
        productsCount={cartItemsCountForTabs}
        certificatesCount={eCertificates.length}
        tabName={tabName || 'basket'}
      />
      {tabName ? (
        <CertificationSection certificates={eCertificates} totalPrice={300} />
      ) : (
        <BasketSection
          setCartItemsCountForTabs={setCartItemsCountForTabs}
          cartItems={cartItems}
          totalPrice={totalPrice}
          finishedPrice={finishedPrice}
          discount={discount}
          totalProductsCount={cartItems.length}
        />
      )}
    </div>
  );
};

export default Container;
