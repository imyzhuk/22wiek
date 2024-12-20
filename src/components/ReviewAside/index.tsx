import React from 'react';
import styles from './ReviewAside.module.css';
import StarIcon from '@icons/starIcon.svg';
import { CartButton } from '@/components';
import { FavoriteButton } from './FavoriteButton';
import { DeliveryDetails } from './DeliveryDetails';

type ReviewAsideProps = {
  reviewsCount: number;
  averageRating: number;
  price: number;
  className?: string;
  id: number;
};

// TODO: add <FavoriteButton isThereProduct={false} />

export const ReviewAside: React.FC<ReviewAsideProps> = ({
  reviewsCount,
  averageRating,
  price,
  className,
  id,
}) => {
  let { format } = new Intl.NumberFormat('ru', {
    minimumFractionDigits: 2,
  });

  const [intPricePart, decimalPricePart] = format(price).split(',');
  return (
    <div className={styles.container}>
      <div className={`${styles.content} ${className}`}>
        <div className={styles.wrapper}>
          <div className={styles.ratingArea}>
            {averageRating ? (
              <a
                className={`${styles.ratingAreaLink} ${styles.ratingAreaLinkDisabled}`}
              >
                <div className={styles.ratingInfo}>
                  <StarIcon className={styles.star} />
                  <span className={styles.rating}>
                    {averageRating.toFixed(1)}
                  </span>
                </div>
                <span className={styles.reviewCount}>({reviewsCount})</span>
              </a>
            ) : (
              <a
                className={`${styles.ratingAreaLink} ${styles.ratingAreaLinkDisabled}`}
              >
                <div className={styles.ratingInfo}>
                  <StarIcon className={styles.emptyStar} />
                  <span className={styles.emptyRating}>0.0</span>
                </div>
              </a>
            )}
          </div>
          <div className={styles.price}>
            {intPricePart}
            <span className={styles.pricePart}>,{decimalPricePart} р.</span>
          </div>
          <div className={styles.buttons}>
            <CartButton id={id} />
            {false && <FavoriteButton isThereProduct={false} />}
          </div>
        </div>
        <DeliveryDetails />
      </div>
    </div>
  );
};
