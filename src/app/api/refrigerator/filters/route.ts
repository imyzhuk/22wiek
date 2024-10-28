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
