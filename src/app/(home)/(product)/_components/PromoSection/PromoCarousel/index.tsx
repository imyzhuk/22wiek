'use client';
import React, { useEffect } from 'react';
import styles from './PromoCarousel.module.css';
import { ArrowButton, ChipButton, Chips, ProductCard } from '@/components';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { SectionHeader } from '../..';
import { ExpandedDiscountType, ProductWithProducer } from '@/types/product';
import { getDiscountTypeName } from '@/utils/formatDiscountType';
import productAPI from '@/services/productAPI';
import { Loader } from './Loader';

export const options: { name: string; value: ExpandedDiscountType }[] = [
  {
    name: 'Все',
    value: 'All',
  },
  {
    name: 'Товары со скидкой',
    value: 'Discount',
  },
  {
    name: 'Уцененные товары',
    value: 'Sale',
  },
];

type PromoCarouselProps = {
  products: ProductWithProducer[];
};

export const PromoCarousel: React.FC<PromoCarouselProps> = (props) => {
  const [products, setProducts] = React.useState(props.products);
  const [activeOption, setActiveOption] = React.useState<ExpandedDiscountType>(
    options[0].value,
  );
  const [isLoading, setIsLoading] = React.useState(false);

  let { format } = new Intl.NumberFormat('ru', {
    minimumFractionDigits: 2,
  });

  const getProducts = async (type: ExpandedDiscountType) => {
    setIsLoading(true);
    const { data } = await productAPI.getPromoProducts(type, 20);
    setProducts(data);
    setActiveOption(type);
    setIsLoading(false)
  };
  return (
    <>
      <SectionHeader
        title="Все акции"
        link="/special_offers/promo"
        linkText="Смотреть все"
      >
        <ul className={styles.chips}>
          {options.map((option) => (
            <ChipButton
              key={option.value}
              value={option.value}
              name={option.name}
              isActive={activeOption === option.value}
              onClick={() => getProducts(option.value)}
            />
          ))}
        </ul>
      </SectionHeader>
      <div className={styles.body}>
        {isLoading && <Loader />}
        <ArrowButton
          direction="left"
          className={`${styles.arrowLeft} ${styles.disabledButton}`}
        />
        <Swiper
          className={styles.products}
          slidesPerView={5}
          slidesPerGroup={5}
          modules={[Navigation]}
          navigation={{
            nextEl: `.${styles.arrowRight}`,
            prevEl: `.${styles.arrowLeft}`,
            disabledClass: styles.disabledButton,
          }}
        >
          {products.map(
            ({
              id,
              name,
              model,
              producer,
              discount,
              discountTypes,
              price,
              oldPrice,
              preview,
              link,
            }) => (
              <SwiperSlide key={id} className={styles.product}>
                <ProductCard
                  id={id}
                  currentPrice={`${format(price)}  р.`}
                  oldPrice={oldPrice ? `${format(oldPrice)}  р.` : ''}
                  productImg={preview}
                  productLink={link}
                  title={`${name} ${model} ${producer?.name ?? ''}`}
                  type={name}
                  discount={discount}
                  discountType={getDiscountTypeName(discountTypes)}
                  hasLikeButton
                />
              </SwiperSlide>
            ),
          )}
        </Swiper>
        <ArrowButton
          direction="right"
          className={`${styles.arrowRight} ${styles.disabledButton}`}
        />
      </div>
    </>
  );
};
