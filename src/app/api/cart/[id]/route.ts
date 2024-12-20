import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';
import { HttpStatusCodes } from '../../statusCodes';
import { prisma } from '@prisma/prisma-client';
import { getToken } from 'next-auth/jwt';

export async function PATCH(
  req: NextRequest,
  { params }: { params: { id: string } },
) {
  const cartItemId = Number(params.id);
  const {
    data: { quantity },
  } = (await req.json()) as { data: { quantity: number } };

  if (!cartItemId) {
    return NextResponse.json(
      {
        error: 'Invalid cart item id',
      },
      {
        status: HttpStatusCodes.BAD_REQUEST,
      },
    );
  }
  if (!quantity) {
    return NextResponse.json(
      {
        error: "There aren't a quantity",
      },
      {
        status: HttpStatusCodes.BAD_REQUEST,
      },
    );
  }

  const cookieStore = cookies();
  const userId = cookieStore.get('userId')?.value;
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });

  if (!token && !userId) {
    return NextResponse.json(
      {
        error: 'Unauthorized',
      },
      {
        status: HttpStatusCodes.UNAUTHORIZED,
      },
    );
  }

  try {
    await prisma.cartItem.update({
      where: {
        id: cartItemId,
        userId: token?.id && userId,
      },
      data: {
        quantity,
      },
    });

    const cartItems = await prisma.cartItem.findMany({
      where: {
        userId: token?.id && userId,
      },
      select: {
        quantity: true,
      },
    });

    const newQuantity = cartItems.reduce(
      (acc, { quantity }) => acc + quantity,
      0,
    );

    return NextResponse.json({ newQuantity }, { status: HttpStatusCodes.OK });
  } catch (e) {
    return NextResponse.json(
      {
        error: 'Product was not found',
      },
      {
        status: HttpStatusCodes.NOT_FOUND,
      },
    );
  }
}

export async function DELETE(req: NextRequest) {
  const cartItemId = Number(req.nextUrl.searchParams.get('id'));

  if (!cartItemId) {
    return NextResponse.json(
      {
        error: 'Invalid cart item id',
      },
      {
        status: HttpStatusCodes.BAD_REQUEST,
      },
    );
  }

  const cookieStore = cookies();
  const userId = cookieStore.get('userId')?.value;
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });

  if (!token && !userId) {
    return NextResponse.json(
      {
        error: 'Unauthorized',
      },
      {
        status: HttpStatusCodes.UNAUTHORIZED,
      },
    );
  }

  try {
    await prisma.cartItem.delete({
      where: {
        id: cartItemId,
        userId: token?.id || userId,
      },
    });
  } catch (e) {
    return NextResponse.json(
      {
        error: 'Product was not found',
      },
      {
        status: HttpStatusCodes.NOT_FOUND,
      },
    );
  }
}
