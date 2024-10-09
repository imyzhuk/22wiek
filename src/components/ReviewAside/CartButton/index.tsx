'use client';

import React from 'react';
import styles from './CartButton.module.css';
import { useRouter } from 'next/navigation';

type CartButtonProps = {
  isThereProduct: boolean;
};

export const CartButton: React.FC<CartButtonProps> = ({ isThereProduct }) => {
  const [isActive, setIsActive] = React.useState(isThereProduct);
  const router = useRouter();

  const handleClick = () => {
    if (isActive) {
      router.push('/order');
    }
    setIsActive((prev) => !prev);
  };
  return (
    <button
      className={`${styles.button} ${isActive ? styles.active : styles.unactive}`}
      onClick={handleClick}
    >
      {isActive ? 'В корзине' : 'Добавить в корзину'}
    </button>
  );
};
