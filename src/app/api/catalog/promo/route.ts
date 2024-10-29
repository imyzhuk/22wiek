import { DiscountType } from '@prisma/client';
import { prisma } from '@prisma/prisma-client';
import { HttpStatusCodes } from '../../statusCodes';
import { ExpandedDiscountType } from '@/types/product';
import { GetPromoProductsType } from '@/types/catalog';
import { NextResponse } from 'next/server';
import { Decimal } from '@prisma/client/runtime/library';

type GetResponse = Array<
  Omit<GetPromoProductsType[number], 'price' | 'oldPrice'> & {
    price: Decimal;
    oldPrice: Decimal;
  }
>;

const discountTypes: ExpandedDiscountType[] = [
  'All',
  'Discount',
  'Superprice',
  'Sale',
];
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const type = searchParams.get('type') ?? '';
  const limit = searchParams.get('limit')
    ? Number(searchParams.get('limit'))
    : 10;
  let discountTypesCondition;

  if (!discountTypes.includes(type as ExpandedDiscountType)) {
    return new Response('Invalid params', {
      status: HttpStatusCodes.BAD_REQUEST,
    });
  }

  switch (type) {
    case 'All':
      discountTypesCondition = {
        discountTypes: {
          isEmpty: false,
        },
      };
      break;
    case 'Discount':
    case 'Superprice':
    case 'Sale':
      discountTypesCondition = { discountTypes: { has: type } };
      break;
  }

  const promoProducts = await prisma.product.findMany({
    where: {
      NOT: {
        isInStock: false,
      },
      ...discountTypesCondition,
    },
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
    take: limit,
  });

  return NextResponse.json<GetResponse>(promoProducts);
}
