import { NextRequest, NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { prisma } from '@prisma/prisma-client';
import { HttpStatusCodes } from '../../statusCodes';
import { getToken } from 'next-auth/jwt';
import { createUser } from '../../_utils/user';

export async function GET(req: NextRequest) {
  const cookieStore = cookies();
  let userId = cookieStore.get('userId')?.value;
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });

  if (!token && !userId) {
    userId = await createUser();
    cookies().set('userId', userId);
    return NextResponse.json(
      {
        productIds: [],
        count: 0,
      },
      {
        status: HttpStatusCodes.OK,
      },
    );
  }

  try {
    const response = await prisma.cartItem.findMany({
      where: {
        userId: token?.id || userId,
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
