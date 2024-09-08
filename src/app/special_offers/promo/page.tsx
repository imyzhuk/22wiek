import {
  CategoriesFilter,
  FilterItem,
  FilterRadioGroup,
  Footer,
  ProducersFilter,
  PromoDropdown,
  RangeFilter,
} from '@/components';
import React from 'react';
import styles from './PromoPage.module.css';
import { addSpacesToPrice } from '@/utils/addSpacesToPrice';

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
  return (
    <>
      <div className={styles.wrapper}>
        <main className={styles.main}>
          <h1 className={styles.title}>Все акции</h1>
          <PromoDropdown />
          <ul className={styles.products}></ul>
          <button className={styles.moreButton}>Показать еще</button>
        </main>
        <aside>
          <CategoriesFilter />
          <FilterItem title="Скидка" hasBottomBorder>
            <FilterRadioGroup name="discount" options={discounts} />
          </FilterItem>
          <FilterItem title="Цена" hasBottomBorder>
            <RangeFilter
              fromValuePlaceholder="0.24"
              untilValuePlaceholder={addSpacesToPrice('37500.00')}
            />
          </FilterItem>
          <ProducersFilter />
        </aside>
      </div>
      <Footer />
    </>
  );
}

export default PromoPage;
