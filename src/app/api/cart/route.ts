import { NextRequest, NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { HttpStatusCodes } from '../statusCodes';
import { prisma } from '@prisma/prisma-client';
import { createUser } from '@/app/api/_utils/user';

export async function DELETE(req: NextRequest) {
  const cookieStore = cookies();
  const userId = cookieStore.get('userId')?.value;
  let condition;
  if (!userId) {
    return NextResponse.json(
      { error: 'Unauthorized' },
      { status: HttpStatusCodes.UNAUTHORIZED },
    );
  }

  const productIds = req.nextUrl.searchParams.get('productIds');

  if (!productIds || !JSON.parse(productIds).length) {
    return NextResponse.json(
      {
        error: "There aren't products ids",
      },
      {
        status: HttpStatusCodes.BAD_REQUEST,
      },
    );
  }

  try {
    await prisma.cartItem.deleteMany({
      where: {
        AND: [
          { userId },
          {
            id: {
              in: JSON.parse(productIds),
            },
          },
        ],
      },
    });
    return NextResponse.json(null, {
      status: HttpStatusCodes.OK,
    });
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
export async function POST(req: NextRequest) {
  const cookieStore = cookies();
  let userId = cookieStore.get('userId')?.value;
  if (!userId) {
    userId = await createUser();
    cookies().set('userId', userId);
  }

  const {
    data: { productId },
  } = await req.json();

  if (!productId) {
    return NextResponse.json(
      {
        error: "There isn't a product id",
      },
      {
        status: HttpStatusCodes.BAD_REQUEST,
      },
    );
  }

  try {
    await prisma.cartItem.create({
      data: {
        userId,
        productId: Number(productId),
      },
    });

    return NextResponse.json('ok', {
      status: HttpStatusCodes.OK,
    });
  } catch (error) {
    return NextResponse.json(
      {
        error,
      },
      {
        status: HttpStatusCodes.BAD_REQUEST,
      },
    );
  }
}
