import { prisma } from '@prisma/prisma-client';
import { cookies } from 'next/headers';

export const createUser = async () => {
  const user = await prisma.user.create({
    data: {
      image: '/images/anonym.svg',
      name: 'Покупатель 22wiek.by',
      locationId: 1,
    },
  });
  return user.id;
};
