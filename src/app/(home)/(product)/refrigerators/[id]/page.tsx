import React from 'react';
import styles from './RefrigeratorPage.module.css';
import { prisma } from '@prisma/prisma-client';
import { ProductTabs } from '@/components';
import {
  AdditionalInfo,
  Attributes,
  Description,
  Services,
  TopBlock,
} from './_components';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

type RefrigeratorPageProps = {
  params: {
    id: string;
  };
};

const RefrigeratorPage: React.FC<RefrigeratorPageProps> = async ({
  params,
}) => {
  const id = Number(params.id);
  const data = await prisma.product.findFirst({
    where: { id },
    include: {
      additionalServices: true,
      categories: true,
      images: true,
      refrigerator: {
        include: {
          additionalLinks: true,
        },
      },
    },
  });
  if (!data || !data.refrigerator) {
    return <div>Error</div>;
  }

  const {
    categories,
    additionalServices,
    refrigerator: { additionalLinks, ...refrigerator },
    images,
    ...product
  } = data;
  const averageRating =
    (product.fiveStarsCommentsCount * 5 +
      product.fourStarsCommentsCount * 4 +
      product.threeStarsCommentsCount * 3 +
      product.twoStarsCommentsCount * 2 +
      product.oneStarCommentsCount * 1) /
    product.reviewsCount;

  const refrigeratorData = {
    ...refrigerator,
    freezingPower: Number(refrigerator.freezingPower),
    height: Number(refrigerator.height),
    width: Number(refrigerator.width),
    depth: Number(refrigerator.depth),
    weight: Number(refrigerator.weight),
  };

  return (
    <>
      <h1 className={styles.title}>{product.name}</h1>
      <ProductTabs
        tabs={[
          { id: 0, name: 'Основное', link: `${product.link}${id}` },
          {
            id: 1,
            name: 'Отзывы',
            count: product.reviewsCount,
            link: `${product.link}${product.id}/reviews`,
          },
        ]}
      />
      <TopBlock
        id={id}
        guarantee={refrigerator.guarantee}
        discountInCurrency={
          product.oldPrice
            ? Number(product.oldPrice) - Number(product.price)
            : null
        }
        images={images}
        controlType={refrigerator.controlType}
        noFrostSystem={refrigerator.noFrostSystem}
        totalVolume={refrigerator.totalVolume}
        energyClass={refrigerator.energyClass}
        energySavingMode={refrigerator.energySavingMode}
        height={Number(refrigerator.height)}
        width={Number(refrigerator.width)}
        averageRating={averageRating}
        price={Number(product.price)}
        reviewsCount={product.reviewsCount}
      />
      <Services items={additionalServices} />
      <Attributes {...refrigeratorData} />
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
          <p className={styles.disclaimer}>
            Производители оставляют за собой право изменять внешний вид,
            характеристики и комплектацию товара, предварительно не уведомляя
            продавцов и потребителей. Просим вас отнестись с пониманием к
            данному факту и заранее приносим извинения за возможные неточности в
            описании и фотографиях товара. Будем благодарны вам за{' '}
            <button className={styles.disclaimerButton}>
              сообщение об ошибках
            </button>{' '}
            — это поможет сделать наш каталог еще точнее!
          </p>
        </div>
        <AdditionalInfo items={additionalLinks} />
      </div>
    </>
  );
};

export default RefrigeratorPage;
