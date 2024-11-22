import { Main } from '@/components';
import { Metadata } from 'next';
import { Suspense } from 'react';

export const metadata: Metadata = {
  openGraph: {
    url: 'https://22wiek.vercel.app/order',
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
