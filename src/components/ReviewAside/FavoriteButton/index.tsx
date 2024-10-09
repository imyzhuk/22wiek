'use client';

import React from 'react';
import styles from './FavoriteButton.module.css';
import HeartIcon from '@Images/heartIcon.svg';
import FullHeartIcon from '@Images/fullHeartIcon.svg';

type FavoriteButtonProps = {
  isThereProduct: boolean;
};

export const FavoriteButton: React.FC<FavoriteButtonProps> = ({
  isThereProduct,
}) => {
  const [isLiked, setIsLiked] = React.useState(isThereProduct);

  const handleClick = () => {
    setIsLiked((prev) => !prev);
  };

  return (
    <button
      className={`${styles.button} ${isLiked ? styles.liked : styles.unliked}`}
      onClick={handleClick}
    >
      {isLiked ? <FullHeartIcon /> : <HeartIcon color="black" />}
    </button>
  );
};
