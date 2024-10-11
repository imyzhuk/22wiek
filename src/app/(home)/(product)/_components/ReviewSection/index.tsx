import React from 'react';
import styles from './ReviewSection.module.css';
import YoutubeIcon from '@images/youtube.png';
import Image from 'next/image';
import { ReviewCarousel } from './ReviewCarousel';
import { reviews } from '@/data/reviews';

type ReviewSectionProps = {};

export const ReviewSection: React.FC<ReviewSectionProps> = () => {
  return (
    <section className={styles.section}>
      <header className={styles.header}>
        <Image
          src={YoutubeIcon}
          alt="Обзоры"
          className={styles.youtubeIcon}
          width={22}
        />
        <h5 className={styles.title}>Обзоры</h5>
      </header>
      <ReviewCarousel reviews={reviews} />
    </section>
  );
};
