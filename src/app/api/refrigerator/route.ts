import { NextRequest, NextResponse } from 'next/server';
import { Prisma } from '@prisma/client';
import qs from 'qs';
import { prisma } from '@prisma/prisma-client';
import { productsOnPage } from '@/data/product';
import { GetRefrigeratorsParamsType } from '@/types/refrigerator';

export async function GET(request: NextRequest) {
  const {
    order,
    filters,
    page = 1,
  } = qs.parse(
    request.url.split('?')[1],
  ) as Partial<GetRefrigeratorsParamsType>;
  const whereConditions: Prisma.ProductWhereInput[] = [];
  const orderCondition: Prisma.ProductOrderByWithAggregationInput = {};
  const refrigeratorWhereConditions: Prisma.RefrigeratorWhereInput[] = [];

  if (order?.price) {
    orderCondition.price = order.price;
  } else if (order?.popularity) {
    orderCondition.ordersCount = 'desc';
  } else if (order?.promoDiscount) {
    orderCondition.discountTypes = 'desc';
  }

  if (filters?.fromPrice || filters?.untilPrice) {
    whereConditions.push({
      price: {
        gte: Number(filters.fromPrice) || undefined,
        lte: Number(filters.untilPrice) || undefined,
      },
    });
  }

  if (filters?.discountTypes?.length) {
    whereConditions.push({
      discountTypes: {
        hasSome: filters?.discountTypes,
      },
    });
  }

  if (filters?.producerIds) {
    whereConditions.push({
      producerId: {
        in: filters.producerIds.map(Number),
      },
    });
  }

  if (filters?.fromFreezerSectionsCount || filters?.untilFreezerSectionsCount) {
    refrigeratorWhereConditions.push({
      freezerSectionsCount: {
        gte: Number(filters.fromFreezerSectionsCount) || undefined,
        lte: Number(filters.untilFreezerSectionsCount) || undefined,
      },
    });
  }

  if (filters?.types) {
    refrigeratorWhereConditions.push({
      type: {
        in: filters.types,
      },
    });
  }

  const productsPromise = prisma.product.findMany({
    where: {
      AND: [
        ...whereConditions,
        {
          refrigerator: {
            is: {
              AND: refrigeratorWhereConditions,
            },
          },
        },
      ],
    },
    orderBy: orderCondition,
    select: {
      id: true,
      name: true,
      discount: true,
      discountTypes: true,
      price: true,
      oldPrice: true,
      preview: true,
      link: true,
    },
    take: productsOnPage,
    skip: productsOnPage * (Number(page) - 1),
  });

  const productsCountPromise = prisma.product.count({
    where: {
      AND: [
        ...whereConditions,
        {
          refrigerator: {
            is: {
              AND: refrigeratorWhereConditions,
            },
          },
        },
      ],
    },
  });

  const [products, productsCount] = await Promise.all([
    productsPromise,
    productsCountPromise,
  ]);
  return NextResponse.json({ products, count: productsCount });
}
