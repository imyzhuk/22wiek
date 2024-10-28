'use client';
import StoreProvider from '@/store/StoreProvider';
import { SessionProvider } from 'next-auth/react';
import React from 'react';
import { Toaster } from 'react-hot-toast';

type ProvidersProps = {
  children: React.ReactNode;
};

export const Providers: React.FC<ProvidersProps> = ({ children }) => {
  return (
    <>
      <Toaster position="top-center" />
      <SessionProvider>
        <StoreProvider>{children}</StoreProvider>
      </SessionProvider>
    </>
  );
};
