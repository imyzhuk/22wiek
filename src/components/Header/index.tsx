'use client';
import React, { useEffect } from 'react';
import styles from './Header.module.css';
import { DesktopHeader } from './DesktopHeader';
import { MobileHeader } from './MobileHeader';
import { useRouter, useSearchParams } from 'next/navigation';
import { useActions } from '@/hooks';
import { useSession } from 'next-auth/react';
import toast from 'react-hot-toast';
import cartAPI from '@/services/cartAPI';

type HeaderProps = {};

export const Header: React.FC<HeaderProps> = () => {
  const { setCartProductIds } = useActions();
  const { data: session } = useSession();
  const params = useSearchParams();
  const router = useRouter();
  const isTablet = window.innerWidth < 993;

  useEffect(() => {
    if (params.has('verified')) {
      toast.success('Регистрация заверешена!');
      router.replace('/');
    }
  }, []);

  useEffect(() => {
    const getCartItems = async () => {
      try {
        const {
          data: { productIds, count },
        } = await cartAPI.getCartProductIds();
        setCartProductIds({
          productIds,
          count,
        });
      } catch (error) {
        console.log(error);
      }
    };
    getCartItems();
  }, [session]);
  return <>{isTablet ? <MobileHeader /> : <DesktopHeader />}</>;
};
