import React from 'react';
import styles from './Summary.module.css';
import { formatReviewCountString } from '@/utils/formatReviewCountString';
import { Rating, RatingBar } from '..';

type SummaryProps = {
  averageRating: number;
  reviewsCount: number;
  fiveStarsCommentsCount: number;
  fourStarsCommentsCount: number;
  threeStarsCommentsCount: number;
  twoStarsCommentsCount: number;
  oneStarCommentsCount: number;
};

export const Summary: React.FC<SummaryProps> = ({
  averageRating,
  reviewsCount,
  fiveStarsCommentsCount,
  fourStarsCommentsCount,
  threeStarsCommentsCount,
  twoStarsCommentsCount,
  oneStarCommentsCount,
}) => {
  const roundedAverageRating = averageRating.toFixed(1);

  return (
    <div className={styles.container}>
      <div className={styles.ratingSummary}>
        <span className={styles.rating}>{roundedAverageRating}</span>
        <Rating rating={+roundedAverageRating} />
        <span className={styles.reviewCountText}>
          {formatReviewCountString(reviewsCount)}
        </span>
        <button className={styles.addReviewButton}>Добавить отзыв</button>
      </div>
      <div className={styles.ratingStatistics}>
        <RatingBar
          starsCount={5}
          allReviewsCount={reviewsCount}
          reviewsCount={fiveStarsCommentsCount}
        />
        <RatingBar
          starsCount={4}
          allReviewsCount={reviewsCount}
          reviewsCount={fourStarsCommentsCount}
        />
        <RatingBar
          starsCount={3}
          allReviewsCount={reviewsCount}
          reviewsCount={threeStarsCommentsCount}
        />
        <RatingBar
          starsCount={2}
          allReviewsCount={reviewsCount}
          reviewsCount={twoStarsCommentsCount}
        />
        <RatingBar
          starsCount={1}
          allReviewsCount={reviewsCount}
          reviewsCount={oneStarCommentsCount}
        />
      </div>
    </div>
  );
};
