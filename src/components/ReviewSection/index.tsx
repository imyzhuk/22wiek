import React from 'react';
import styles from './ReviewSection.module.css';
import { ArrowButton } from '@/components';
import YoutubeIcon from '../../../public/youtube.png';
import Image from 'next/image';
import { reviews } from '@/data/reviews';
import { ReviewCard } from './ReviewCard';

type ReviewSectionProps = {};

export const ReviewSection: React.FC<ReviewSectionProps> = () => {
  return (
    <section className={styles.section}>
      <header className={styles.header}>
        <Image src={YoutubeIcon} alt="Обзоры" className={styles.youtubeIcon} width={22} />
        <h5 className={styles.title}>Обзоры</h5>
      </header>
      <div className={styles.body}>
        <ArrowButton direction="left" isActive={false} />
        <ul className={styles.cards}>
          {reviews.map((review) => (
            <ReviewCard
              key={review.id}
              likesCount={review.likesCount}
              poster={review.poster}
              title={review.title}
              viewsCount={review.viewsCount}
            />
          ))}
        </ul>
        <ArrowButton direction="right" isActive />
      </div>
    </section>
  );
};
