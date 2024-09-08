import React from 'react';
import styles from './BasketSection.module.css';
import { FilterCheckbox } from '@/components';
import Image from 'next/image';
import { deliveryDetails, services } from '@/data/cart';
import Link from 'next/link';
import { addDotsToNumber } from '@/utils/addDotsToNumber';
import MinusIcon from '@Images/minusIcon.svg';
import PlusIcon from '@Images/plusIcon.svg';
import { transformNumToPrice } from '@/utils/transformNumToPrice';
import GiftIcon from '@Images/giftIcon.svg';
import DeliveryIcon from '@Images/deliveryIcon.svg';
import ArrivalPointIcon from '@Images/arrivalPointIcon.svg';
import BinIcon from '@Images/binIcon.svg';
import HeartIcon from '@Images/heartIcon.svg';
import { getRelativeTimeFromTodayTo } from '@/utils/getRelativeTimeFromTodayTo';
import { Services } from './Services';
import { Adgames } from './Adgames';
import { Promocode } from './Promocode';
import { TotalPrice } from './TotalPrice';
import { EmptySection } from './EmptySection';
import { CartProduct } from '@/types/cartModel';

type BasketSectionProps = {
  products: CartProduct[];
};

export const discountTypes = {
  discount: 'Скидка',
  superprice: 'Суперцена',
};

/* TODO: make a modal with all services*/
/* TODO: make interactive*/

export const BasketSection: React.FC<BasketSectionProps> = ({ products }) => {
  if (!products.length) return <EmptySection />;

  return (
    <div className={styles.section}>
      <div className={styles.productsContainer}>
        <div className={styles.firstRow}>
          <FilterCheckbox
            name="Выбрать все"
            value="all"
            checkboxGroupName="basket"
          />
          <button className={styles.deleteAllButton}>Удалить выбранные</button>
        </div>
        {products.map((product) => {
          const [intPricePart, decimalPricePart] = transformNumToPrice(
            product.prices.salePrice,
          ).split(',');
          return (
            <div className={styles.product} key={product.id}>
              <div className={styles.checkboxWrapper}>
                <FilterCheckbox name="" value="" checkboxGroupName="basket" />
              </div>
              <div className={styles.info}>
                <div className={styles.topBlock}>
                  <div className={styles.imgContainer}>
                    <Link href={product.url}>
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        style={{ objectFit: 'contain' }}
                      />
                    </Link>
                  </div>
                  <div className={styles.titleWrapper}>
                    <a href={product.url} className={styles.title}>
                      {product.name}
                    </a>
                    <span className={styles.code}>
                      код товара {addDotsToNumber(product.code)}
                    </span>
                  </div>
                  <div className={styles.counter}>
                    <button className={styles.counterButton}>
                      <MinusIcon />
                    </button>
                    <input
                      type="text"
                      value={product.count}
                      onChange={() => null}
                      className={styles.counterInput}
                    />
                    <button className={styles.counterButton}>
                      <PlusIcon />
                    </button>
                  </div>
                  <div className={styles.priceBlock}>
                    <div className={styles.oldPrice}>
                      {transformNumToPrice(product.prices.price)} р.
                    </div>
                    <div className={styles.price}>
                      {intPricePart},
                      <span className={styles.priceDecimalPart}>
                        {decimalPricePart} р.
                      </span>
                    </div>
                    {product.discountType && (
                      <div className={styles.discount}>
                        {product.discountType === 'discount'
                          ? `Скидка ${transformNumToPrice(product.discount)} р.`
                          : discountTypes[product.discountType]}
                      </div>
                    )}
                  </div>
                </div>
                <div className={styles.bottomBlock}>
                  <ul className={styles.details}>
                    {product.present && (
                      <li className={styles.detail}>
                        <span className={styles.detailName}>Подарок:</span>
                        <a
                          href={product.present.link}
                          className={styles.presentLink}
                        >
                          <GiftIcon className={styles.presentIcon} />
                          {product.present.offer}
                        </a>
                      </li>
                    )}
                    <li className={styles.detail}>
                      <span className={styles.detailName}>Доставка:</span>
                      <span className={styles.detailPart}>
                        <DeliveryIcon className={styles.deliveryIcon} />
                        Курьером{' '}
                        {getRelativeTimeFromTodayTo(
                          deliveryDetails[product.code][0].available_from,
                          3,
                        )}
                      </span>
                      <span className={styles.detailPart}>
                        <ArrivalPointIcon className={styles.deliveryIcon} />
                        Самовывоз{' '}
                        {getRelativeTimeFromTodayTo(
                          deliveryDetails[product.code][1].available_from,
                          3,
                        )}
                      </span>
                    </li>
                  </ul>
                  {services[product.id] && (
                    <Services items={services[product.id]} />
                  )}
                  <div className={styles.buttonsWrapper}>
                    <button className={styles.productButton}>
                      <BinIcon /> Удалить
                    </button>
                    <button className={styles.productButton}>
                      <HeartIcon /> В избранное
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className={styles.rightColumn}>
        <TotalPrice />
        <Adgames />
        <Promocode />
      </div>
    </div>
  );
};
