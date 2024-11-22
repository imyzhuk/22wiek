'use client';
import React from 'react';
import styles from './Listing.module.css';
import {
  ProductCard,
  ProductCardSkeleton,
  ProductsPagination,
} from '@/components';
import { useMediaQuery, useTypedSelector } from '@/hooks';
import { getDiscountTypeName } from '@/utils';
import CrossedLoopIcon from '@icons/crossedLoopIcon.svg';

let { format } = new Intl.NumberFormat('ru', {
  minimumFractionDigits: 2,
});

type ListingProps = {};

export const Listing: React.FC<ListingProps> = () => {
  const products = useTypedSelector((state) => state.product.items);
  const isProductsLoading = useTypedSelector(
    (state) => state.product.isLoading,
  );
  const isTablet = useMediaQuery({ maxWidth: 992 });
  const elementsInRow = isTablet ? 2 : 4;
  const IndexOfElementWithoutBottomBorder =
    Math.floor((products.length - 1) / elementsInRow) * elementsInRow;

  return (
    <div className={styles.main}>
      {isProductsLoading && (
        <ul className={styles.products}>
          {Array.from({ length: 8 }).map((_, idx) => (
            <li key={idx} className={styles.productWrapper}>
              <div className={styles.product}>
                <ProductCardSkeleton />
              </div>
            </li>
          ))}
        </ul>
      )}
      {Boolean(products.length) && (
        <ul className={styles.products}>
          {products.map(
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
              <li
                key={id}
                className={`${styles.productWrapper} ${idx === IndexOfElementWithoutBottomBorder ? styles.noBottomBorder : ''}`}
              >
                <div className={styles.product}>
                  <ProductCard
                    id={id}
                    growable
                    currentPrice={`${format(price)} р.`}
                    oldPrice={+oldPrice ? `${format(oldPrice)} р.` : ''}
                    productImg={preview}
                    productLink={link}
                    title={name}
                    type={name}
                    discount={discount}
                    discountType={getDiscountTypeName(discountTypes)}
                    hasLikeButton={false}
                  />
                </div>
              </li>
            ),
          )}
        </ul>
      )}
      {!(isProductsLoading || products.length) && (
        <div className={styles.notProductWrapper}>
          <CrossedLoopIcon />
          <span>Ничего не найдено</span>
        </div>
      )}

      <ProductsPagination />
    </div>
  );
};
