import { Header, Main } from '@/components';

type HomeLayoutProps = Readonly<{
  children: React.ReactNode;
}>;
export default function HomeLayout({ children }: HomeLayoutProps) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}
