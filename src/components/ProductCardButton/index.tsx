'use client';

import React, { useState } from 'react';
import styles from './ProductCardButton.module.css';
import cartAPI from '@/services/cartAPI';

type ProductCardButtonProps = {
  id: number;
};

export const ProductCardButton: React.FC<ProductCardButtonProps> = ({ id }) => {
  const [isActive, setIsActive] = useState(false);
  const handleClick = async () => {
    if (!isActive) {
      await cartAPI.addToCart(id);
      setIsActive(true);
      return;
    }
  };

  return (
    <button
      className={`${styles.button} ${isActive ? styles.buttonActive : ''}`}
      onClick={handleClick}
    >
      {isActive ? 'В корзине' : 'В корзину'}
    </button>
  );
};
