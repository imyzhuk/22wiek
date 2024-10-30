'use client';

import React, { useEffect, useState } from 'react';
import styles from './ProductCardButton.module.css';
import cartAPI from '@/services/cartAPI';
import { useTypedSelector } from '@/hooks/useTypedSelector';
import { useActions } from '@/hooks';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';

type ProductCardButtonProps = {
  id: number;
};

export const ProductCardButton: React.FC<ProductCardButtonProps> = ({ id }) => {
  const cartProductIds = useTypedSelector((state) => state.cart.productIds);
  const { addCartProductId } = useActions();
  const [isActive, setIsActive] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const router = useRouter();
  const handleClick = async () => {
    if (!isActive) {
      setIsLoading(true);
      try {
        await cartAPI.addToCart(id);
        addCartProductId(id);
        setIsActive(true);
      } catch (error) {
        toast.error('Не получилось добавить товар в корзину');
      } finally {
        setIsLoading(false);
      }
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
      {isActive ? 'В корзине' : 'В корзину'}
    </button>
  );
};
