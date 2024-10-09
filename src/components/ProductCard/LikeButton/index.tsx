'use client';

import React from 'react';
import styles from './LikeButton.module.css';
import HeartIcon from '@icons/heartIcon.svg';
import FullHeartIcon from '@icons/fullHeartIcon.svg';

type LikeButtonProps = {};

export const LikeButton: React.FC<LikeButtonProps> = () => {
  const [isLiked, setIsLiked] = React.useState<boolean>(false);

  const handleClick = () => {
    setIsLiked((prev) => !prev);
  };

  return (
    <button
      className={`${styles.button} ${isLiked ? styles.liked : styles.unliked}`}
      onClick={handleClick}
    >
      {isLiked ? <FullHeartIcon /> : <HeartIcon />}
    </button>
  );
};
