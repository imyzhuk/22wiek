import React from 'react';
import styles from './CertificationSection.module.css';
import { EmptySection } from './EmptySection';
import { Certificate } from '@/types/cartModel';
import { TotalPrice } from './TotalPrice';
import Link from 'next/link';
import { transformNumToPrice } from '@/utils/transformNumToPrice';
import BinIcon from '@icons/binIcon.svg';
import HeartIcon from '@icons/heartIcon.svg';
import { Counter } from './Counter';
import ColorGiftIcon from '@icons/colorGiftIcon.svg';

type CertificationSectionProps = {
  certificates: Certificate[];
  totalPrice: number;
};

export const CertificationSection: React.FC<CertificationSectionProps> = ({
  certificates,
  totalPrice,
}) => {
  if (!certificates.length) return <EmptySection />;
  return (
    <div className={styles.section}>
      <ul className={styles.productsContainer}>
        {certificates.map((certificate) => {
          const [intPricePart, decimalPricePart] = transformNumToPrice(
            certificate.prices.price,
          ).split(',');
          return (
            <li className={styles.product} key={certificate.code}>
              <div className={styles.topBlock}>
                <div className={styles.imgContainer}>
                  <Link href={certificate.url} className={styles.imgLink}>
                    <ColorGiftIcon />
                  </Link>
                </div>
                <div className={styles.titleWrapper}>
                  <Link href={certificate.url} className={styles.title}>
                    {certificate.name}
                  </Link>
                </div>
                <Counter value={certificate.count} />
                <div className={styles.price}>
                  {intPricePart},
                  <span className={styles.priceDecimalPart}>
                    {decimalPricePart} р.
                  </span>
                </div>
              </div>
              <div className={styles.buttonsWrapper}>
                <button className={styles.productButton}>
                  <BinIcon /> Удалить
                </button>
                <button className={styles.productButton}>
                  <HeartIcon /> В избранное
                </button>
              </div>
            </li>
          );
        })}
      </ul>
      <div className={styles.rightColumn}>
        <TotalPrice totalPrice={totalPrice} />
      </div>
    </div>
  );
};
