'use client';

import React from 'react';
import styles from './ProductInfo.module.css';
import { Tabs } from '../Tabs';
import { Attributes } from '../Attributes';
import { Description } from '../Description';
import { AdditionalLink, Refrigerator } from '@prisma/client';
import { AdditionalInfo } from '../AdditionalInfo';

type RefrigeratorWihoutDecimal = Omit<
  Refrigerator,
  | 'id'
  | 'productId'
  | 'additionalLinks'
  | 'freezingPower'
  | 'height'
  | 'width'
  | 'depth'
  | 'weight'
> & {
  freezingPower: number;
  height: number;
  width: number;
  depth: number;
  weight: number;
};
type ProductInfoProps = {
  refrigerator: RefrigeratorWihoutDecimal;
  additionalLinks: AdditionalLink[];
};

const tabs = ['Характеристики', 'Описание'];

export const ProductInfo: React.FC<ProductInfoProps> = ({
  refrigerator,
  additionalLinks,
}) => {
  const [tabName, setTabName] = React.useState(tabs[0]);
  const isTablet = window?.innerWidth < 993;
  return (
    <>
      {isTablet && <Tabs items={tabs} onChange={setTabName} />}
      {tabName !== 'Описание' && <Attributes {...refrigerator} />}
      {(!isTablet || tabName === 'Описание') && (
        <div className={styles.additions}>
          <div className={styles.leftColumn}>
            <Description text={refrigerator.description} />
            {refrigerator.originCountry && (
              <p className={styles.producerInfo}>
                Страна производства: {refrigerator.originCountry}
              </p>
            )}
            {refrigerator.producerInfo && (
              <p className={styles.producerInfo}>
                Производитель: {refrigerator.producerInfo}
              </p>
            )}
            {refrigerator.importerInfo && (
              <p className={styles.producerInfo}>
                Импортер в РБ: {refrigerator.importerInfo}
              </p>
            )}
            {refrigerator.supplierInfo && (
              <p className={styles.producerInfo}>
                Поставщик: {refrigerator.supplierInfo}
              </p>
            )}
          </div>
          <AdditionalInfo items={additionalLinks} />
        </div>
      )}
    </>
  );
};
