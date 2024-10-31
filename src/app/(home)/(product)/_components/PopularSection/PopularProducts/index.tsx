'use client';
import React from 'react';
import styles from './PopularProducts.module.css';
import Link from 'next/link';
import { ChipButton, Loader, ProductCard } from '@/components';
import { IProductCard } from '@/types/product';
import { getDiscountTypeName } from '@/utils';
import { SectionHeader } from '../..';
import catalogAPI from '@/services/catalogAPI';
import { usePopularProducts } from '@/hooks';

type Option = {
  id: number;
  name: string;
  fromPrice?: number;
  untilPrice?: number;
};

export const options: Option[] = [
  {
    id: 0,
    name: 'Все',
  },
  {
    id: 1,
    name: 'до 100 р.',
    untilPrice: 100,
  },
  {
    id: 2,
    name: '200 – 400 р.',
    fromPrice: 200,
    untilPrice: 400,
  },
  {
    id: 3,
    name: 'от 400 р.',
    fromPrice: 400,
  },
];

type PopularProductsProps = {
  elementsInRow: number;
  products: Omit<IProductCard, 'isInStock'>[];
};

export const PopularProducts: React.FC<PopularProductsProps> = ({
  elementsInRow,
  products,
}) => {
  const {
    shownProducts,
    isAllProductsShown,
    showMoreProducts,
    setNewProducts,
  } = usePopularProducts(products, elementsInRow * 2);
  const [activeOption, setActiveOption] = React.useState<Option>(options[0]);
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  let { format } = new Intl.NumberFormat('ru', {
    minimumFractionDigits: 2,
  });

  const onChipClick = async (option: Option) => {
    setIsLoading(true);
    setActiveOption(option);
    try {
      const { data } = await catalogAPI.getPopularProducts(
        20,
        option.fromPrice,
        option.untilPrice,
      );
      setNewProducts(data);
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  };

  const IndexOfElementWithputBottomBorder =
    Math.floor((shownProducts.length - 1) / elementsInRow) * elementsInRow;

  return (
    <>
      <SectionHeader
        title="Популярные"
        link="/special_offers/recommend"
        linkText={false ? 'Смотреть все' : ''}
      >
        <ul className={styles.chips}>
          {options.map((option) => (
            <ChipButton
              key={option.id}
              name={option.name}
              isActive={activeOption.id === option.id}
              onClick={() => onChipClick(option)}
            />
          ))}
        </ul>
      </SectionHeader>
      <div className={styles.body}>
        {isLoading && (
          <div className={styles.loader}>
            <Loader />
          </div>
        )}
        <div className={styles.products}>
          {shownProducts.map(
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
              index,
            ) => (
              <div
                key={id}
                className={`${styles.product} ${index === IndexOfElementWithputBottomBorder ? styles.noBottomBorder : ''}`}
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
                  hasLikeButton={false}
                />
              </div>
            ),
          )}
        </div>
      </div>
      {!isAllProductsShown && (
        <button className={styles.moreButton} onClick={showMoreProducts}>
          Показать еще
        </button>
      )}
    </>
  );
};
