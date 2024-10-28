import { prisma } from '@prisma/prisma-client';
import { notFound } from 'next/navigation';
import { ResetForm } from './_components';

type ResetPageProps = {
  searchParams: Promise<{ [key: string]: string | undefined }>;
};

const ResetPage = async ({ searchParams }: ResetPageProps) => {
  const data = await searchParams;
  if (!data.code) {
    notFound();
  }

  const { code } = data;

  const verificationCode = await prisma.verificationCode.findFirst({
    where: {
      code,
    },
  });

  if (!verificationCode) {
    notFound();
  }

  return <ResetForm userId={verificationCode.userId} />;
};

export default ResetPage;
