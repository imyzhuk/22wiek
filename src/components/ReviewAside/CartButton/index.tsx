'use client';
import React, { useEffect, useState } from 'react';
import styles from './CartButton.module.css';
import { useRouter } from 'next/navigation';
import { useActions, useTypedSelector } from '@/hooks';
import cartAPI from '@/services/cartAPI';

type CartButtonProps = {
  isThereProduct: boolean;
  id: number;
};

export const CartButton: React.FC<CartButtonProps> = ({
  isThereProduct,
  id,
}) => {
  const cartProductIds = useTypedSelector((state) => state.cart.productIds);
  const { addCartProductId } = useActions();
  const [isActive, setIsActive] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const router = useRouter();
  const handleClick = async () => {
    if (!isActive) {
      setIsLoading(true);
      await cartAPI.addToCart(id);
      addCartProductId(id);
      setIsLoading(false);
      setIsActive(true);
      return;
    } else {
      router.push('/order', { scroll: false });
    }
  };

  useEffect(() => {
    if (isActive) {
      return;
    }

    if (cartProductIds?.some((productId) => productId === id)) {
      setIsActive(true);
    }
  }, [cartProductIds]);
  return (
    <button
      className={`${styles.button} ${isActive ? styles.active : styles.unactive}`}
      onClick={handleClick}
      disabled={isLoading}
    >
      {isActive ? 'В корзине' : 'Добавить в корзину'}
    </button>
  );
};
