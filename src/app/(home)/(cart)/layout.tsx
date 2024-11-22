import { Main } from '@/components';
import { Metadata } from 'next';
import { Suspense } from 'react';

export const metadata: Metadata = {
  openGraph: {
    title: 'Онлайн-гипермаркет 22wiek',
    description: '⭐️ Доставка и самовывоз по всей Беларуси',
    siteName: 'Онлайн-гипермаркет 22wiek',
    type: 'website',
    url: 'https://22wiek.vercel.app/order',
    images: [
      {
        url: '/favicons/open-graph-image.jpg',
      },
    ],
  },
};

type CartLayoutProps = Readonly<{
  children: React.ReactNode;
}>;
export default function CartLayout({ children }: CartLayoutProps) {
  return (
    <>
      <Main>
        <Suspense>{children}</Suspense>
      </Main>
    </>
  );
}
