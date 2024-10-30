import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@prisma/prisma-client';
import { cookies } from 'next/headers';
import { HttpStatusCodes } from '../../statusCodes';
import { GetCartInfoResponse } from '@/types/cart';
import { getToken } from 'next-auth/jwt';

export async function GET(req: NextRequest) {
  const cookieStore = cookies();
  let userId = cookieStore.get('userId')?.value;
  let condition;
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });

  if (!token && !userId) {
    return NextResponse.json(
      { error: 'Unauthorized' },
      { status: HttpStatusCodes.UNAUTHORIZED },
    );
  }

  const productIds = req.nextUrl.searchParams.get('productIds');

  if (!productIds || !JSON.parse(productIds).length) {
    condition = {};
  } else {
    condition = {
      id: {
        in: JSON.parse(productIds),
      },
    };
  }

  const cartItems = await prisma.cartItem.findMany({
    where: {
      AND: [{ userId: token?.id || userId }, condition],
    },
    select: {
      id: true,
      quantity: true,
      product: {
        select: {
          price: true,
          oldPrice: true,
        },
      },
    },
  });

  const finishedPrice = cartItems.reduce(
    (acc, item) => acc + Number(item.product.price) * item.quantity,
    0,
  );

  const totalPrice = cartItems.reduce((acc, item) => {
    let price = Number(item.product.oldPrice) || Number(item.product.price);
    return acc + price * item.quantity;
  }, 0);

  const totalProductsCount = cartItems.reduce(
    (acc, item) => acc + item.quantity,
    0,
  );

  const discount = totalPrice - finishedPrice;

  return NextResponse.json<GetCartInfoResponse>({
    finishedPrice: +finishedPrice.toFixed(2),
    totalPrice: +totalPrice.toFixed(2),
    totalProductsCount,
    discount: +discount.toFixed(2),
  });
}
