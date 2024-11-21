'use client';
import React from 'react';
import styles from './ProfileMenu.module.css';
import Link from 'next/link';
import BasketIcon from '@icons/basketIcon.svg';
import { useTypedSelector } from '@/hooks';
import { signOut } from 'next-auth/react';
import AnonymAccountIcon from '@icons/anonymAccountIcon.svg';

type ProfileMenuProps = {
  isLoggedIn: boolean;
};

export const ProfileMenu: React.FC<ProfileMenuProps> = ({ isLoggedIn }) => {
  const cartItemsCount = useTypedSelector((state) => state.cart.cartItemsCount);
  return (
    <ul className={styles.list}>
      <li className={styles.item}>
        <Link href="/order" className={styles.link}>
          <span className={styles.icon}>
            <BasketIcon className={styles.basketIcon} />
          </span>
          <span className={styles.text}>Корзина</span>
          {Boolean(cartItemsCount) && (
            <span className={`${styles.count} ${styles.pink}`}>
              {cartItemsCount}
            </span>
          )}
        </Link>
      </li>
      {isLoggedIn && (
        <li className={styles.item}>
          <button
            className={`${styles.link} ${styles.logoutLink}`}
            onClick={() => signOut()}
          >
            <span className={styles.icon}>
              <AnonymAccountIcon />
            </span>
            <span className={styles.text}>Выйти</span>
          </button>
        </li>
      )}
    </ul>
  );
};
