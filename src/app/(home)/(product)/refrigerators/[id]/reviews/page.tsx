import React from 'react';
import styles from './RefrigeratorReviewsPage.module.css';
import { prisma } from '@prisma/prisma-client';
import { redirect } from 'next/navigation';
import { ProductTabs, ReviewAside } from '@/components';
import { Review, Summary } from './_components';
import { toLowerCaseFirstLetter } from '@/utils';
import RightArrow from '@icons/rightArrow.svg';
import Link from 'next/link';
import { Metadata } from 'next';

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
    title: `Отзывы на ${toLowerCaseFirstLetter(product?.name || 'Холодильник')}`,
    description: `Отзывы на ${toLowerCaseFirstLetter(product?.name || 'Холодильник')} в интернет-магазине 22wiek.`,
    openGraph: {
      title: `Отзывы на ${toLowerCaseFirstLetter(product?.name || 'Холодильник')}`,
      description: `Отзывы на ${toLowerCaseFirstLetter(product?.name || 'Холодильник')} в интернет-магазине 22wiek.`,
      siteName: 'Онлайн-гипермаркет 22wiek',
      type: 'website',
      url: `https://22wiek.vercel.app/refrigerators/${id}/reviews`,
      images: [
        {
          url: '/favicons/open-graph-image.jpg',
        },
      ],
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

type RefrigeratorReviewsPageProps = {
  params: {
    id: string;
  };
};

const RefrigeratorReviewsPage: React.FC<RefrigeratorReviewsPageProps> = async ({
  params,
}) => {
  const id = Number(params.id);
  const productPromise = prisma.product.findFirst({
    where: { id },
    select: {
      name: true,
      price: true,
      link: true,
      reviewsCount: true,
      fiveStarsCommentsCount: true,
      fourStarsCommentsCount: true,
      threeStarsCommentsCount: true,
      twoStarsCommentsCount: true,
      oneStarCommentsCount: true,
    },
  });
  const reviewsPromise = prisma.review.findMany({
    where: { productId: id },
    include: {
      user: {
        select: {
          name: true,
          image: true,
          location: true,
        },
      },
    },
    orderBy: { createdAt: 'desc' },
    take: 10,
  });

  const [product, reviews] = await Promise.all([
    productPromise,
    reviewsPromise,
  ]);

  if (!product || !reviews) {
    return redirect('/refrigerators');
  }

  const averageRating =
    (product.fiveStarsCommentsCount * 5 +
      product.fourStarsCommentsCount * 4 +
      product.threeStarsCommentsCount * 3 +
      product.twoStarsCommentsCount * 2 +
      product.oneStarCommentsCount * 1) /
    product.reviewsCount;

  return (
    <>
      <div className={styles.titleContainer}>
        <Link href={`/refrigerators/${id}`} className={styles.backLink}>
          <RightArrow className={styles.backArrow} />
        </Link>
        <h1 className={styles.title}>
          Отзывы на {toLowerCaseFirstLetter(product.name)}
        </h1>
      </div>
      <ProductTabs
        tabs={[
          { id: 0, name: 'Основное', link: `${product.link}${id}` },
          {
            id: 1,
            name: 'Отзывы',
            count: product.reviewsCount,
            link: `${product.link}${id}/reviews`,
          },
        ]}
      />
      <main className={styles.main}>
        <div className={styles.firstColumn}>
          <Summary
            averageRating={averageRating}
            reviewsCount={product.reviewsCount}
            fiveStarsCommentsCount={product.fiveStarsCommentsCount}
            fourStarsCommentsCount={product.fourStarsCommentsCount}
            threeStarsCommentsCount={product.threeStarsCommentsCount}
            twoStarsCommentsCount={product.twoStarsCommentsCount}
            oneStarCommentsCount={product.oneStarCommentsCount}
          />
          {reviews.map((review) => (
            <Review key={review.id} {...review} />
          ))}
        </div>
        <ReviewAside
          id={id}
          className={styles.reviewAside}
          reviewsCount={product.reviewsCount}
          averageRating={averageRating}
          price={Number(product.price)}
        />
      </main>
    </>
  );
};

export default RefrigeratorReviewsPage;
