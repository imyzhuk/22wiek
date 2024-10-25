import React from 'react';
import styles from './RefrigeratorReviewsPage.module.css';
import { prisma } from '@prisma/prisma-client';
import { redirect } from 'next/navigation';
import { ProductTabs, ReviewAside } from '@/components';
import { Review, Summary } from './_components';
import { toLowerCaseFirstLetter } from '@/utils';

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
      <h1 className={styles.title}>
        Отзывы на {toLowerCaseFirstLetter(product.name)}
      </h1>
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
