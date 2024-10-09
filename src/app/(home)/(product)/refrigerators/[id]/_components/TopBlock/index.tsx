import React from 'react';
import styles from './TopBlock.module.css';
import { ReviewAside } from '@/components';
import { Image } from '@prisma/client';
import Link from 'next/link';
import { ProductCardGallery, TopAttribute, Labels } from '..';

type TopBlockProps = {
  reviewsCount: number;
  averageRating: number;
  price: number;
  controlType: string;
  noFrostSystem: boolean;
  totalVolume: number;
  energyClass: string;
  energySavingMode: boolean;
  height: number;
  width: number;
  images: Image[];
  guarantee: string;
  discountInCurrency: number | null;
};

export const TopBlock: React.FC<TopBlockProps> = ({
  reviewsCount,
  averageRating,
  price,
  controlType,
  noFrostSystem,
  totalVolume,
  energyClass,
  energySavingMode,
  height,
  width,
  images,
  guarantee,
  discountInCurrency,
}) => {
  let { format } = new Intl.NumberFormat('ru', {
    maximumFractionDigits: 2,
  });

  const labels = [];
  if (discountInCurrency) {
    labels.push({
      id: 1,
      name: `Скидка ${format(discountInCurrency)}р.`,
      style: { background: 'linear-gradient(90deg, #E52E6B 0%, #FB4F4F 100%)' },
    });
  }
  if (guarantee) {
    labels.push({
      id: 0,
      name: `Гарантия ${guarantee}`,
      style: { background: 'linear-gradient(90deg, #3C64F0 0%, #384EC3 100%)' },
    });
  }
  return (
    <div className={styles.container}>
      <div>
        <ProductCardGallery images={images} />
        <div className={styles.labels}>
          <Labels items={labels} />
        </div>
      </div>
      <div className={styles.centerBlock}>
        <div aria-label="Топовые характеристики">
          <TopAttribute name="Тип управления" value={controlType} />
          <TopAttribute name="Система No Frost" value={noFrostSystem} />
          <TopAttribute name="Общий полезный объем" value={totalVolume} />
          <TopAttribute name="Класс энергопотребления" value={energyClass} />
          <TopAttribute
            name="Энергосберегающий режим"
            value={energySavingMode}
          />
          <TopAttribute name="Высота" value={`${height} см`} />
          <TopAttribute name="Ширина" value={`${width} см`} />
          <Link href="#attributes" className={styles.attributeLink}>
            Перейти к характеристикам
          </Link>
        </div>
      </div>
      <ReviewAside
        className={styles.reviewAside}
        averageRating={averageRating}
        reviewsCount={reviewsCount}
        price={price}
      />
    </div>
  );
};
