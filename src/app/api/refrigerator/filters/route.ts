import { NextRequest } from 'next/server';
import { prisma } from '@prisma/prisma-client';
import { Producer } from '@prisma/client';

export async function GET(request: NextRequest) {
  const data = await prisma.product.findMany({
    where: {
      refrigerator: {
        isNot: null,
      },
    },
    select: {
      producer: {
        select: {
          name: true,
          id: true,
        },
      },
    },
  });
  const producers: Record<number, Producer> = {};
  data.forEach(({ producer }) => {
    if (producer && !producers[producer.id]) {
      producers[producer.id] = producer;
    }
  });
  return Response.json(Object.values(producers));
}

/*
  const refrigetarorsInfo = await prisma.refrigerator.aggregate({
    _min: {
      height: true,
      freezerSectionsCount: true,
    },
    _max: {
      height: true,
      freezerSectionsCount: true,
    },
  });
  const productsInfo = await prisma.refrigerator.aggregate({});

  return Response.json({ refrigetarorsInfo, productsInfo });
  */

/*
  import { NextRequest, NextResponse } from 'next/server';
import qs from 'qs';
import { Prisma } from '@prisma/client';
import { prisma } from '@prisma/prisma-client';
import { GetRefrigeratorImmutableFiltersParamsType } from '@/types/refrigerator';


export async function GET(request: NextRequest) {
  const filters = qs.parse(
    request.url
  ) as GetRefrigeratorImmutableFiltersParamsType;
  const whereConditions: Prisma.ProductWhereInput[] = [];
  const refrigeratorWhereConditions: Prisma.RefrigeratorWhereInput[] = [];

  if (filters?.discountTypes?.length) {
    whereConditions.push({
      discountTypes: {
        hasEvery: filters?.discountTypes,
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

  const products = await prisma.product.findMany({
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
    select: {
      price: true,
      discountTypes: true,
      producer: {
        select: {
          name: true,
          id: true
        }
      },
      refrigerator: {
        select: {
          type: true,
          construction: true,
          height: true,
          freezerSectionsCount: true
        }
      }
    },
  });

  let productsInfo = {
    fromPrice: Infinity,
    fromFreezerSectionsCount: Infinity,
    fromHeight: Infinity,
    untilFreezerSectionsCount: 0,
    untilHeight: 0,
    untilPrice: 0
  }
  products.forEach(product => {
    productsInfo.fromPrice = Math.min(productsInfo.fromPrice, Number(product.price))
    productsInfo.untilPrice = Math.max(productsInfo.untilPrice, Number(product.price))
    productsInfo.fromFreezerSectionsCount = Math.min(productsInfo.fromFreezerSectionsCount, Number(product.refrigerator?.freezerSectionsCount))
    productsInfo.untilFreezerSectionsCount = Math.max(productsInfo.untilFreezerSectionsCount, Number(product.refrigerator?.freezerSectionsCount))
    productsInfo.fromHeight = Math.min(productsInfo.fromHeight, Number(product.refrigerator?.height))
    productsInfo.untilHeight = Math.max(productsInfo.untilHeight, Number(product.refrigerator?.height))
  })
  
  return NextResponse.json(
    productsInfo
  );
}
*/
