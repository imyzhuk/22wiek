import { NextRequest, NextResponse } from 'next/server';
import { Prisma } from '@prisma/client';
import qs from 'qs';
import { prisma } from '@prisma/prisma-client';
import { productsOnPage } from '@/data/product';
import {
  GetPromotionsResponseType,
  GetPromotionsParamsType,
} from '@/types/promo';
import { Decimal } from '@prisma/client/runtime/library';

type GetResponse = {
  count: number;
  products: Array<
    Omit<
      GetPromotionsResponseType['products'][number],
      'price' | 'oldPrice'
    > & {
      price: Decimal;
      oldPrice: Decimal;
    }
  >;
};

export async function GET(request: NextRequest) {
  const {
    order,
    filters,
    page = 1,
  } = qs.parse(request.url.split('?')[1]) as Partial<GetPromotionsParamsType>;
  const whereConditions: Prisma.ProductWhereInput[] = [];
  const orderCondition: Prisma.ProductOrderByWithAggregationInput = {};

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

  if (filters?.discount) {
    whereConditions.push({
      discount: {
        gte: Number(filters.discount),
      },
    });
  }

  whereConditions.push({
    discountTypes: filters?.discountTypes?.length
      ? {
          hasSome: filters?.discountTypes,
        }
      : {
          isEmpty: false,
        },
  });

  if (filters?.producerIds) {
    whereConditions.push({
      producerId: {
        in: filters.producerIds.map(Number),
      },
    });
  }

  const productsPromise = prisma.product.findMany({
    where: {
      AND: whereConditions,
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
      isInStock: true,
    },
    take: productsOnPage,
    skip: productsOnPage * (Number(page) - 1),
  });

  const productsCountPromise = prisma.product.count({
    where: {
      AND: whereConditions,
    },
  });

  const [products, productsCount] = await Promise.all([
    productsPromise,
    productsCountPromise,
  ]);
  return NextResponse.json<GetResponse>({ products, count: productsCount });
}
