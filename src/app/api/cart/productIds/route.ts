import { NextRequest, NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { prisma } from '@prisma/prisma-client';
import { createUser } from '../../_utils/user';
import { HttpStatusCodes } from '../../statusCodes';

export async function GET(req: NextRequest) {
  const cookieStore = cookies();
  let userId = cookieStore.get('userId')?.value;
  if (!userId) {
    userId = await createUser();
    cookies().set('userId', userId);
    return NextResponse.json([], {
      status: HttpStatusCodes.OK,
    });
  }

  try {
    const response = await prisma.cartItem.findMany({
      where: {
        userId,
      },
      select: {
        quantity: true,
        productId: true,
      },
    });
    const productIds = response.map((item) => item.productId);
    const count = response.reduce((acc, item) => acc + item.quantity, 0);
    return NextResponse.json(
      {
        productIds,
        count,
      },
      {
        status: HttpStatusCodes.OK,
      },
    );
  } catch (error) {
    return NextResponse.json(
      {
        error,
      },
      {
        status: HttpStatusCodes.NOT_FOUND,
      },
    );
  }
}
