import { DiscountType } from '@prisma/client';
import { prisma } from '@prisma/prisma-client';
import { HttpStatusCodes } from '../../statusCodes';
import { ExpandedDiscountType } from '@/types/product';

const discountTypes: (ExpandedDiscountType)[] = [
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
  let where;

  if (!discountTypes.includes(type as ExpandedDiscountType)) {
    return new Response('Invalid params', {
      status: HttpStatusCodes.BAD_REQUEST,
    });
  }

  switch (type) {
    case 'All':
      where = {
        discountTypes: {
          isEmpty: false,
        },
      };
      break;
    case 'Discount':
    case 'Superprice':
    case 'Sale':
      where = { discountTypes: { has: type } };
      break;
  }

  const promoProducts = await prisma.product.findMany({
    where: where,
    include: {
      producer: true,
    },
    take: limit,
  });

  return Response.json(promoProducts);
}
