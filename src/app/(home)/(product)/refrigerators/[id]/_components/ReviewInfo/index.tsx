import React from 'react';
import styles from './ReviewInfo.module.css';
import StarIcon from '@icons/starIcon.svg';
import { formatReviewCountString } from '@/utils';

type ReviewInfoProps = {
  reviewsCount: number;
  averageRating: number;
  id: number;
};

export const ReviewInfo: React.FC<ReviewInfoProps> = ({
  averageRating,
  reviewsCount,
  id,
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        {averageRating ? (
          <>
            <span className={styles.rating}>{averageRating.toFixed(1)}</span>
            <StarIcon className={styles.star} />
            <a href={`${id}/reviews`} className={styles.reviewCount}>
              {formatReviewCountString(reviewsCount)}
            </a>
          </>
        ) : (
          <>
            <span className={styles.emptyRating}>0.0</span>
            <StarIcon className={styles.emptyStar} />
          </>
        )}
      </div>
    </div>
  );
};
