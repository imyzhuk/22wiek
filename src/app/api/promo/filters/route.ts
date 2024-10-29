import { NextRequest, NextResponse } from 'next/server';
import qs from 'qs';
import { DiscountType, Prisma } from '@prisma/client';
import { prisma } from '@prisma/prisma-client';
import {
  GetPromotionsFiltersParamsType,
  GetPromotionsFiltersResponseType,
} from '@/types/promo';

export async function GET(request: NextRequest) {
  const filters = qs.parse(
    request.url.split('?')[1],
  ) as GetPromotionsFiltersParamsType;
  let priceCondition: Prisma.ProductWhereInput,
    discountTypesCondition: Prisma.ProductWhereInput,
    discountCondition: Prisma.ProductWhereInput,
    producerIdsCondition: Prisma.ProductWhereInput;

  priceCondition = {
    price: {
      gte: Number(filters.fromPrice) || undefined,
      lte: Number(filters.untilPrice) || undefined,
    },
  };

  discountCondition = filters.discount
    ? {
        discount: {
          gte: Number(filters.discount),
        },
      }
    : {};

  discountTypesCondition = {
    discountTypes: filters?.discountTypes?.length
      ? {
          hasSome: filters?.discountTypes,
        }
      : {
          isEmpty: false,
        },
  };

  producerIdsCondition = filters?.producerIds
    ? {
        producerId: {
          in: filters.producerIds.map(Number),
        },
      }
    : {};

  const pricePromise = prisma.product.aggregate({
    where: {
      AND: [discountTypesCondition, producerIdsCondition, discountCondition],
    },
    _max: {
      price: true,
    },
    _min: {
      price: true,
    },
  });
  const discountTypesPromise = prisma.product.findMany({
    where: {
      AND: [priceCondition, producerIdsCondition, discountCondition],
    },
    select: {
      discountTypes: true,
    },
  });

  const [priceResponse, discountTypesResponse] = await Promise.all([
    pricePromise,
    discountTypesPromise,
  ]);
  const discountTypesSet = new Set<DiscountType>();
  discountTypesResponse.some(({ discountTypes }) => {
    if (discountTypesSet.size === 3) {
      return false;
    }
    discountTypes.forEach((value) => discountTypesSet.add(value));
  });

  let productsInfo = {
    fromPrice: Number(priceResponse._min.price),
    untilPrice: Number(priceResponse._max.price),
    discountTypes: Array.from(discountTypesSet),
  };
  return NextResponse.json<GetPromotionsFiltersResponseType>(productsInfo);
}
