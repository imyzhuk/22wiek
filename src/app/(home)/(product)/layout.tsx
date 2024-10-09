import { Footer, Main } from '@/components';

type ProductLayoutProps = Readonly<{
  children: React.ReactNode;
}>;
export default function ProductLayout({ children }: ProductLayoutProps) {
  return (
    <>
      <Main>{children}</Main>
      <Footer />
    </>
  );
}
