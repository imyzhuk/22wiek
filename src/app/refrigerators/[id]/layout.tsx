import React from 'react';
import styles from './RefrigeratorLayout.module.css';
import { Breadcrumps } from '@/components';
import { prisma } from '@prisma/prisma-client';
import { redirect } from 'next/navigation';

type RefrigeratorLayoutProps = {
  children: React.ReactNode;
  params: {
    id: string;
  };
};

const RefrigeratorLayout: React.FC<RefrigeratorLayoutProps> = async ({
  children,
  params: { id },
}) => {
  const product = await prisma.product.findFirst({
    where: {
      id: Number(id),
    },
    select: {
      categories: true,
    },
  });

  if (!product || !product.categories) {
    redirect('/refrigerators');
  }

  return (
    <div className={styles.wrapper}>
      <Breadcrumps
        items={[{ id: 0, name: 'Главная', link: '/' }, ...product.categories]}
      />
      {children}
    </div>
  );
};

export default RefrigeratorLayout;
