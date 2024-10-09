import React from 'react';
import styles from './Rating.module.css';
import StarIcon from '@Images/starIcon.svg';

const starsArray = Array.from({ length: 5 });
type RatingProps = {
  rating: number;
};

export const Rating: React.FC<RatingProps> = ({ rating }) => {
  return (
    <div className={styles.rating}>
      <div className={styles.fullStars} style={{ width: `${rating * 20}%` }}>
        {starsArray.map((_, idx) => (
          <StarIcon className={`${styles.star} ${styles.full}`} key={idx} />
        ))}
      </div>
      <div>
        {starsArray.map((_, idx) => (
          <StarIcon className={`${styles.star}`} key={idx} />
        ))}
      </div>
    </div>
  );
};
