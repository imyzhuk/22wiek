import { Main } from '@/components';
import { Suspense } from 'react';

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
