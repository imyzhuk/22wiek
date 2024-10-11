import { prisma } from '@prisma/prisma-client';
import { NextRequest, NextResponse } from 'next/server';
import { HttpStatusCodes } from '../statusCodes';
import { SearchResponse } from '@/types/search';
import { Prisma } from '@prisma/client';
import { Decimal } from '@prisma/client/runtime/library';

type ProductsResponse = (Omit<SearchResponse['products'][0], 'price'> & {
  price: Decimal;
})[];

export async function GET(req: NextRequest) {
  const name = req.nextUrl.searchParams.get('name') ?? '';

  if (!name) {
    return NextResponse.json<SearchResponse>(
      { products: [], categories: [] },
      {
        status: HttpStatusCodes.OK,
      },
    );
  }

  const productsPromise: Prisma.PrismaPromise<ProductsResponse> =
    prisma.product.findMany({
      where: {
        NOT: {
          isInStock: false,
        },
        name: {
          contains: name,
          mode: 'insensitive', //Fix: it doesn't work with russian
        },
      },
      select: {
        id: true,
        name: true,
        link: true,
        preview: true,
        price: true,
      },
      take: 8,
    });
  const categoriesPromise: Prisma.PrismaPromise<SearchResponse['categories']> =
    prisma.category.findMany({
      where: {
        name: {
          contains: name,
          mode: 'insensitive', //Fix: it doesn't work with russian
        },
      },
      select: {
        id: true,
        name: true,
        link: true,
      },
      take: 8,
    });
  const [products, categories] = await Promise.all([
    productsPromise,
    categoriesPromise,
  ]);

  return NextResponse.json<{
    products: ProductsResponse;
    categories: SearchResponse['categories'];
  }>(
    { products, categories },
    {
      status: HttpStatusCodes.OK,
    },
  );
}
