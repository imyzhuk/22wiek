import React from 'react';
import styles from './PromoPage.module.css';
import { FiltersWrapper, Listing } from '@/components';
import { Filters } from './_components';
import qs from 'qs';
import { GetPromotionsParamsType } from '@/types/promo';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Скидки и акции интернет-магазина 22wiek, каталог с низкими ценами',
  description: 'Скидки, акции и суперцены онлайн-гипермаркета 22wiek',
  openGraph: {
    title: 'Скидки и акции интернет-магазина 22wiek, каталог с низкими ценами',
    description: 'Скидки, акции и суперцены онлайн-гипермаркета 22wiek',
    siteName: 'Онлайн-гипермаркет 22wiek',
    type: 'website',
    url: `https://22wiek.vercel.app/special_offers/promo`,
    images: [
      {
        url: '/favicons/open-graph-image.jpg',
      },
    ],
  },
};

async function PromoPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const data = await searchParams;
  const searchParamsString = Object.entries(data)
    .map(([key, value]) => `${key}=${value}`)
    .join('&');
  // TODO: add validity checking for search params
  const searchParamsObject = qs.parse(
    searchParamsString,
  ) as unknown as Partial<GetPromotionsParamsType>;
  return (
    <div className={styles.wrapper}>
      <div>
        <h1 className={styles.title}>Все акции</h1>
      </div>
      <div className={styles.contentContainer}>
        <Listing />
        <FiltersWrapper>
          <Filters initialSearchParams={searchParamsObject} />
        </FiltersWrapper>
      </div>
    </div>
  );
}

export default PromoPage;
