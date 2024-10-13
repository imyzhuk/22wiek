import { prisma } from '@prisma/prisma-client';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  const limit = Number(req.nextUrl.searchParams.get('limit')) || 10;
  const untilPrice =
    Number(req.nextUrl.searchParams.get('untilPrice')) || undefined;
  const fromPrice =
    Number(req.nextUrl.searchParams.get('fromPrice')) || undefined;

  const popularProducts = await prisma.product.findMany({
    where: {
      NOT: {
        isInStock: false,
      },
      price: {
        gte: fromPrice,
        lte: untilPrice,
      },
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
    },
    take: limit,
    orderBy: {
      ordersCount: 'desc',
    },
  });

  return NextResponse.json(popularProducts);
}
