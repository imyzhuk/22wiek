'use client';
import StoreProvider from '@/store/StoreProvider';
import { SessionProvider } from 'next-auth/react';
import React from 'react';

type ProvidersProps = {
  children: React.ReactNode;
};

export const Providers: React.FC<ProvidersProps> = ({ children }) => {
  return (
    <SessionProvider>
      <StoreProvider>{children}</StoreProvider>
    </SessionProvider>
  );
};
