'use client';

import React, { useState } from 'react';
import styles from './ProductCardButton.module.css';

type ProductCardButtonProps = {
  id: number;
};

export const ProductCardButton: React.FC<ProductCardButtonProps> = ({ id }) => {
  const [isActive, setIsActive] = useState(false);
  const handleClick = () => {
    if (!isActive) {
      setIsActive(true);
      return;
    }
    console.log(id);
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
