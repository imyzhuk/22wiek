import { Header, Main } from '@/components';
import { Suspense } from 'react';

type HomeLayoutProps = Readonly<{
  children: React.ReactNode;
}>;
export default function HomeLayout({ children }: HomeLayoutProps) {
  return (
    <>
      <Suspense>
        <Header />
      </Suspense>
      {children}
    </>
  );
}
