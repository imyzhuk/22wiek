import { Breadcrumps, FiltersWrapper, Listing } from '@/components';
import React from 'react';
import styles from './RefrigeratorsPage.module.css';
import { Filters } from './_components';
import qs from 'qs';
import { GetRefrigeratorsParamsType } from '@/types/refrigerator';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Купить холодильник в рассрочку – интернет-магазин 22wiek',
  description: 'Холодильники для дома недорого в 22веке',
  openGraph: {
    title: 'Купить холодильник в рассрочку – интернет-магазин 22wiek',
    description: 'Холодильники для дома недорого в 22веке',
    siteName: 'Онлайн-гипермаркет 22wiek',
    type: 'website',
    url: 'https://22wiek.vercel.app/refrigerators',
    images: [
      {
        url: '/favicons/open-graph-image.jpg',
      },
    ],
  },
};

async function RefrigeratorsPage({
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
  ) as unknown as Partial<GetRefrigeratorsParamsType>;
  return (
    <div className={styles.wrapper}>
      <Breadcrumps
        items={[
          { id: 0, name: 'Главная', link: '/' },
          { id: 1, name: 'Бытовая техника', link: '/kitchen' },
          { id: 2, name: 'Крупная техника для кухни', link: '/large_tech' },
        ]}
      />
      <div className={styles.titleWrapper}>
        <h1 className={styles.title}>Холодильники</h1>
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

export default RefrigeratorsPage;
