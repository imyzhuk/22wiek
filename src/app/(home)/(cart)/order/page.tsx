import React from 'react';
import Container from './_components/Container';
import { prisma } from '@prisma/prisma-client';
import { cookies } from 'next/headers';
import { CartItemWithProduct } from '@/types/cart';
import { AdditionalService } from '@prisma/client';

type OrderPageProps = {};

const OrderPage: React.FC<OrderPageProps> = async () => {
  let userId = cookies().get('userId')?.value;
  let cardItemsWithoutDecimal: CartItemWithProduct[] = [];

  if (userId) {
    const cartItems = await prisma.cartItem.findMany({
      where: {
        userId,
      },
      include: {
        product: {
          select: {
            id: true,
            name: true,
            price: true,
            oldPrice: true,
            preview: true,
            link: true,
            discount: true,
            discountTypes: true,
            isInStock: true,
            additionalServices: true,
          },
        },
      },
    });

    const getAdditionalServicesWithoutDecimal = (
      additionalServices: AdditionalService[],
    ) => {
      return additionalServices.map((service) => ({
        ...service,
        price: Number(service.price),
      }));
    };
    cardItemsWithoutDecimal = cartItems.map((item) => {
      return {
        ...item,
        product: {
          ...item.product,
          price: Number(item.product.price),
          oldPrice: Number(item.product.oldPrice),
          additionalServices: getAdditionalServicesWithoutDecimal(
            item.product.additionalServices,
          ),
        },
      };
    });
  }
  return <Container cartItems={cardItemsWithoutDecimal} />;
};

export default OrderPage;
