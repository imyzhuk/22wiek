import { NextRequest } from 'next/server';
import { parseParams } from '../_utils/params';
import { prisma } from '@prisma/prisma-client';
import {
  DiscountType,
  Prisma,
  Producer,
  RefrigeratorConstruction,
  RefrigeratorType,
} from '@prisma/client';
import { productsOnPage } from '@/data/product';

type GetHandlerParamsType = {
  limit: string;
  page: string;
  order: {
    price?: 'desc' | 'asc';
    popularity?: 'desc';
    promoDiscount?: 'desc';
  };
  filters: {
    fromPrice?: string;
    untilPrice?: string;
    fromHeight?: string;
    untilHeight?: string;
    discountTypes?: DiscountType[];
    types?: RefrigeratorType[];
    constructions?: RefrigeratorConstruction[];
    producerIds?: Producer['id'][];
    fromFreezerSectionsCount: string;
    untilFreezerSectionsCount: string;
  };
};

export async function GET(request: NextRequest) {
  console.log(JSON.parse(request.nextUrl.searchParams.get('order') || ''));
  const { order, filters, page } = parseParams<GetHandlerParamsType>(
    request.nextUrl.searchParams,
  );
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
        hasEvery: filters?.discountTypes,
      },
    });
  }

  if (filters?.fromHeight || filters?.untilHeight) {
    refrigeratorWhereConditions.push({
      height: {
        gte: Number(filters.fromHeight) || undefined,
        lte: Number(filters.untilHeight) || undefined,
      },
    });
  }

  if (filters?.fromFreezerSectionsCount || filters?.untilFreezerSectionsCount) {
    refrigeratorWhereConditions.push({
      height: {
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
  if (filters?.constructions) {
    refrigeratorWhereConditions.push({
      construction: {
        in: filters.constructions,
      },
    });
  }

  if (filters?.producerIds) {
    whereConditions.push({
      producerId: {
        in: filters.producerIds,
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
  return Response.json({ products, count: productsCount });
}
