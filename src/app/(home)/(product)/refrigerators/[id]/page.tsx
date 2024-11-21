import React from 'react';
import styles from './RefrigeratorPage.module.css';
import { prisma } from '@prisma/prisma-client';
import { ProductTabs } from '@/components';
import {
  Disclaimer,
  MobileLabels,
  ProductInfo,
  ReviewInfo,
  Services,
  StaticBlock,
  TopBlock,
} from './_components';
import { Metadata } from 'next';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const id = Number((await params).id);
  const product = await prisma.product.findFirst({
    where: {
      id,
    },
    select: {
      name: true,
    },
  });

  return {
    title: `${product?.name || 'Холодильник'} купить в Беларуси`,
    description: `${product?.name || 'Холодильник'} по доступной цене в интернет-магазине 22wiek. ${product?.name || 'Холодильник'} купить в Беларуси`,
    openGraph: {
      title: `${product?.name || 'Холодильник'} купить в Беларуси`,
      description: `${product?.name || 'Холодильник'} по доступной цене в интернет-магазине 22wiek. ${product?.name || 'Холодильник'} купить в Беларуси`,
    },
  };
}

export async function generateStaticParams() {
  const ids = await prisma.product.findMany({
    select: {
      id: true,
    },
  });
  return ids.map(({ id }) => ({
    id: String(id),
  }));
}

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
      <ReviewInfo
        id={id}
        averageRating={averageRating}
        reviewsCount={product.reviewsCount}
      />
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
      <MobileLabels
        guarantee={refrigerator.guarantee}
        discount={
          product.oldPrice
            ? Number(product.oldPrice) - Number(product.price)
            : null
        }
      />
      <h1 className={styles.mobileTitle}>{product.name}</h1>
      <Services items={additionalServices} />
      <ProductInfo
        refrigerator={refrigeratorData}
        additionalLinks={additionalLinks}
      />
      <Disclaimer />
      <StaticBlock
        id={id}
        price={Number(product.price)}
        oldPrice={Number(product.oldPrice)}
      />
    </>
  );
};

export default RefrigeratorPage;
