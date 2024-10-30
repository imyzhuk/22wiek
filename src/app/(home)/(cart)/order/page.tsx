'use client';
import React, { Suspense, useEffect } from 'react';
import styles from './OrderPage.module.css';
import { BasketSection, CertificationSection, Tabs } from './_components';
import { useSearchParams } from 'next/navigation';
import cartAPI from '@/services/cartAPI';
import { useActions } from '@/hooks';
import { eCertificates } from '@/data/cart';
import { useTypedSelector } from '@/hooks/useTypedSelector';
import { EmptySection as EmptyBasketSection } from './_components/BasketSection/EmptySection';

type OrderPageProps = {};

const OrderPage: React.FC<OrderPageProps> = () => {
  const searchParams = useSearchParams();
  let tabName = searchParams.get('tab') as 'certifications' | null;
  const cartItems = useTypedSelector((state) => state.cart.cartItems);
  const cartItemsCount = useTypedSelector((state) => state.cart.cartItemsCount);
  const { setCartItems, setCartInfo } = useActions();
  useEffect(() => {
    const getAllCartItems = async () => {
      try {
        const promises = Promise.all([cartAPI.getAll(), cartAPI.getInfo([])]);
        const [{ data: cartItems }, { data: cartInfo }] = await promises;
        setCartItems({ cartItems });
        setCartInfo(cartInfo);
      } catch (error) {
        console.log(error);
      }
    };
    getAllCartItems();
  }, []);
  return (
    <div className={styles.container}>
      <Suspense>
        <Tabs tabName={tabName || 'basket'} />
      </Suspense>
      {!!tabName && <CertificationSection certificates={[]} totalPrice={300} />}
      {!tabName && Boolean(cartItems.length) && Boolean(cartItemsCount) && (
        <BasketSection />
      )}
      {!tabName && !(Boolean(cartItems.length) && Boolean(cartItemsCount)) && (
        <EmptyBasketSection />
      )}
    </div>
  );
};

export default OrderPage;
