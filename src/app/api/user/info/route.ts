import { prisma } from '@prisma/prisma-client';
import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';
import { HttpStatusCodes } from '../../statusCodes';
import { GetAdditionalUserInfoResponse } from '@/types/user';

export async function GET(req: NextRequest) {
  const cookieStore = cookies();
  let userId = cookieStore.get('userId')?.value;

  if (!userId) {
    return NextResponse.json<GetAdditionalUserInfoResponse>({
      cartItemsCount: 0,
      favoriteItemsCount: 0,
    });
  }
  const info = await prisma.user.findFirst({
    where: {
      id: userId,
    },
    select: {
      _count: {
        select: {
          cartItems: true,
          favoriteItems: true,
        },
      },
    },
  });

  if (!info) {
    return NextResponse.json(
      { error: 'User not found' },
      { status: HttpStatusCodes.NOT_FOUND },
    );
  }

  const {
    _count: { cartItems: cartItemsCount, favoriteItems: favoriteItemsCount },
  } = info;

  return NextResponse.json<GetAdditionalUserInfoResponse>({
    cartItemsCount,
    favoriteItemsCount,
  });
}
