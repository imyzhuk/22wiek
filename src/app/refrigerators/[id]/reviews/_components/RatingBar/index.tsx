import React from 'react';
import styles from './RatingBar.module.css';
import StarIcon from '@icons/starIcon.svg';

type RatingBarProps = {
  starsCount: number;
  reviewsCount: number;
  allReviewsCount: number;
};

export const RatingBar: React.FC<RatingBarProps> = ({
  starsCount,
  reviewsCount,
  allReviewsCount,
}) => {
  const width = `${((reviewsCount / allReviewsCount) * 100).toFixed(1)}%`;
  return (
    <div className={styles.wrapper}>
      <span className={styles.starsCount}>{starsCount}</span>
      <StarIcon className={styles.star} />
      <div className={styles.bar}>
        <div className={styles.currentValuePart} style={{ width: width }}></div>
      </div>
      <span className={styles.valueCount}>{reviewsCount}</span>
    </div>
  );
};
