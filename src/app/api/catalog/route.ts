import { GetCatalogType } from '@/types/catalog';
import { Category } from '@prisma/client';
import { prisma } from '@prisma/prisma-client';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  const data = await prisma.category.findMany({
    where: {
      parentId: null,
    },
    select: {
      id: true,
      link: true,
      name: true,
      compilations: true,
      producers: true,
      subcategories: {
        include: {
          subcategories: true,
        },
      },
    },
  });

  return NextResponse.json<GetCatalogType>(data);
}
