import { Main } from '@/components';

type CartLayoutProps = Readonly<{
  children: React.ReactNode;
}>;
export default function CartLayout({ children }: CartLayoutProps) {
  return (
    <>
      <Main>{children}</Main>
    </>
  );
}
