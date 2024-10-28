import { NextRequest, NextResponse } from 'next/server';
import qs from 'qs';
import {
  DiscountType,
  Prisma,
  Producer,
  RefrigeratorConstruction,
  RefrigeratorType,
} from '@prisma/client';
import { prisma } from '@prisma/prisma-client';
import {
  GetRefrigeratorMutableFiltersParamsType,
  GetRefrigeratorMutableFiltersResponseType,
} from '@/types/refrigerator';

export async function GET(request: NextRequest) {
  const filters = qs.parse(
    request.url.split('?')[1],
  ) as GetRefrigeratorMutableFiltersParamsType;
  let priceCondition,
    discountTypesCondition,
    producerIdsCondition: Prisma.ProductWhereInput;
  let typesCondition,
    freezerSectionsCountCondition: Prisma.RefrigeratorWhereInput;

  priceCondition = {
    price: {
      gte: Number(filters.fromPrice) || undefined,
      lte: Number(filters.untilPrice) || undefined,
    },
  };

  discountTypesCondition = filters?.discountTypes?.length
    ? {
        discountTypes: {
          hasSome: filters?.discountTypes,
        },
      }
    : {};
  producerIdsCondition = filters?.producerIds
    ? {
        producerId: {
          in: filters.producerIds.map(Number),
        },
      }
    : {};

  typesCondition = filters?.types
    ? {
        type: {
          in: filters.types,
        },
      }
    : {};

  freezerSectionsCountCondition = {
    freezerSectionsCount: {
      gte: Number(filters.fromFreezerSectionsCount) || undefined,
      lte: Number(filters.untilFreezerSectionsCount) || undefined,
    },
  };

  const pricePromise = prisma.product.aggregate({
    where: {
      AND: [
        discountTypesCondition,
        producerIdsCondition,
        {
          refrigerator: {
            is: {
              AND: [typesCondition, freezerSectionsCountCondition],
            },
          },
        },
      ],
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
      AND: [
        priceCondition,
        producerIdsCondition,
        {
          refrigerator: {
            is: {
              AND: [typesCondition, freezerSectionsCountCondition],
            },
          },
        },
      ],
    },
    select: {
      discountTypes: true,
    },
  });

  const typesPromise = prisma.product.findMany({
    where: {
      AND: [
        priceCondition,
        discountTypesCondition,
        producerIdsCondition,
        {
          refrigerator: {
            is: {
              AND: [freezerSectionsCountCondition],
            },
          },
        },
      ],
    },
    select: {
      refrigerator: {
        select: {
          type: true,
        },
      },
    },
  });

  const freezerSectionsCountPromise = prisma.product.findMany({
    where: {
      AND: [
        priceCondition,
        discountTypesCondition,
        producerIdsCondition,
        {
          refrigerator: {
            is: {
              AND: [typesCondition],
            },
          },
        },
      ],
    },
    select: {
      refrigerator: {
        select: {
          freezerSectionsCount: true,
        },
      },
    },
  });

  const [
    priceResponse,
    discountTypesResponse,
    typesResponse,
    freezerSectionsCountResponse,
  ] = await Promise.all([
    pricePromise,
    discountTypesPromise,
    typesPromise,
    freezerSectionsCountPromise,
  ]);
  const discountTypesSet = new Set<DiscountType>();
  discountTypesResponse.some(({ discountTypes }) => {
    if (discountTypesSet.size === 3) {
      return false;
    }
    discountTypes.forEach((value) => discountTypesSet.add(value));
  });
  const typesSet = new Set<RefrigeratorType>();
  typesResponse.some(({ refrigerator }) => {
    if (typesSet.size === 3) {
      return false;
    }
    if (refrigerator) {
      typesSet.add(refrigerator?.type);
    }
  });

  const freezerSectionsCountSet = new Set<number>();
  freezerSectionsCountResponse.forEach(({ refrigerator }) => {
    if (refrigerator?.freezerSectionsCount) {
      freezerSectionsCountSet.add(refrigerator?.freezerSectionsCount);
    }
  });

  let productsInfo = {
    fromPrice: Number(priceResponse._min.price),
    untilPrice: Number(priceResponse._max.price),
    discountTypes: Array.from(discountTypesSet),
    types: Array.from(typesSet),
    freezerSectionsCountOptions: Array.from(freezerSectionsCountSet).sort(
      (a, b) => a - b,
    ),
  };
  return NextResponse.json(productsInfo);
}
