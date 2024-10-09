import React from 'react';
import styles from './PromoPage.module.css';
import {
  CategoriesFilter,
  FilterItem,
  FilterRadioGroup,
  Footer,
  ProducersFilter,
  ProductCard,
  RangeFilter,
} from '@/components';
import { PromoDropdown } from './_components';
import { addSpacesToPrice } from '@/utils/addSpacesToPrice';
import { promoProducts } from '@/data/promo';

const discounts = [
  { name: 'Все', value: 'all' },
  { name: 'от 50%', value: '50' },
  { name: 'от 40%', value: '40' },
  { name: 'от 30%', value: '30' },
  { name: 'от 20%', value: '20' },
  { name: 'от 10%', value: '10' },
];

type PromoPageProps = {};

function PromoPage() {
  const elementsInRow = 4;
  const IndexOfElementWithputBottomBorder =
    Math.floor((promoProducts.length - 1) / elementsInRow) * elementsInRow;
  return (
    <div className={styles.wrapper}>
      <div>
        <h1 className={styles.title}>Все акции</h1>
        <PromoDropdown />
        <ul className={styles.products}>
          {promoProducts.map((promoCard, idx) => (
            <div
              key={promoCard.id}
              className={`${styles.product} ${idx === IndexOfElementWithputBottomBorder ? styles.noBottomBorder : ''}`}
            >
              <ProductCard
                id={promoCard.id}
                currentPrice={promoCard.currentPrice}
                productImg={promoCard.productImg}
                productLink={promoCard.productLink}
                title={promoCard.title}
                type={promoCard.type}
                discount={promoCard.discount}
                discountType={promoCard.discountType}
              />
            </div>
          ))}
        </ul>
        <button className={styles.moreButton}>Показать еще</button>
      </div>
      <div>
        <CategoriesFilter />
        <FilterItem title="Скидка" hasBottomBorder>
          <FilterRadioGroup name="discount" options={discounts} />
        </FilterItem>
        <FilterItem title="Цена" hasBottomBorder>
          <RangeFilter
            unit="р."
            fromValuePlaceholder="0.24"
            untilValuePlaceholder={addSpacesToPrice('37500.00')}
          />
        </FilterItem>
        <FilterItem title="Производители">
          <ProducersFilter />
        </FilterItem>
      </div>
    </div>
  );
}

export default PromoPage;
