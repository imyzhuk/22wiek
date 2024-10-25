'use client';
import React from 'react';
import styles from './Listing.module.css';
import { ProductCard, ProductsPagination } from '@/components';
import { useTypedSelector } from '@/hooks';
import { getDiscountTypeName } from '@/utils';
import CrossedLoopIcon from '@icons/crossedLoopIcon.svg';

let { format } = new Intl.NumberFormat('ru', {
  minimumFractionDigits: 2,
});

type ListingProps = {};

export const Listing: React.FC<ListingProps> = () => {
  const refrigerators = useTypedSelector((state) => state.product.items);
  const isProductsLoading = useTypedSelector(
    (state) => state.product.isLoading,
  );
  const elementsInRow = 4;
  const IndexOfElementWithputBottomBorder =
    Math.floor((refrigerators.length - 1) / elementsInRow) * elementsInRow;
  return (
    <main className={styles.main}>
      {isProductsLoading && <p>...Loading</p>}
      {Boolean(refrigerators.length) && (
        <ul className={styles.products}>
          {refrigerators.map(
            (
              {
                id,
                name,
                discount,
                discountTypes,
                price,
                oldPrice,
                preview,
                link,
              },
              idx,
            ) => (
              <div
                key={id}
                className={`${styles.product} ${idx === IndexOfElementWithputBottomBorder ? styles.noBottomBorder : ''}`}
              >
                <ProductCard
                  id={id}
                  currentPrice={`${format(price)}  р.`}
                  oldPrice={oldPrice ? `${format(oldPrice)}  р.` : ''}
                  productImg={preview}
                  productLink={link}
                  title={name}
                  type={name}
                  discount={discount}
                  discountType={getDiscountTypeName(discountTypes)}
                  hasLikeButton
                />
              </div>
            ),
          )}
        </ul>
      )}
      {!(isProductsLoading || refrigerators.length) && (
        <div className={styles.notProductWrapper}>
          <CrossedLoopIcon />
          <span>Ничего не найдено</span>
        </div>
      )}

      <ProductsPagination />
    </main>
  );
};
