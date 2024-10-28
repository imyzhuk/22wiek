'use client';

import React, { useState } from 'react';
import styles from './AccountWidget.module.css';
import { CircleButton } from '@/components';
import AccountIcon from '@icons/accountIcon.svg';
import AnonymAccountIcon from '@icons/anonymAccountIcon.svg';
import AnonymImg from '@images/anonym.svg';
import BasketIcon from '@icons/basketIcon.svg';
import HeartIcon from '@icons/heartIcon.svg';
import CompareIcon from '@icons/compareIcon.svg';
import ViewIcon from '@icons/viewIcon.svg';
import { usePathname } from 'next/navigation';
import { useOutsideClick, useTypedSelector } from '@/hooks';
import { AuthModal } from './AuthModal';
import Link from 'next/link';
import { signOut, useSession } from 'next-auth/react';

type AccountWidgetProps = {};

export const AccountWidget: React.FC<AccountWidgetProps> = () => {
  const { ref, isActive, setIsActive } = useOutsideClick<HTMLDivElement>(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const pathname = usePathname();
  const { data: session } = useSession();
  const cartItemsCount = useTypedSelector((state) => state.cart.cartItemsCount);
  
  return (
    <div className={styles.container}>
      <CircleButton onClick={() => setIsActive(!isActive)} isActive={isActive}>
        <span className={styles.wrapper}>
          {session ? <AccountIcon /> : <AnonymAccountIcon />}
          <span className={styles.text}>Аккаунт</span>
        </span>
      </CircleButton>
      {isActive && (
        <div ref={ref} className={styles.dropdown}>
          {session ? (
            <>
              <span className={styles.userToolsTitle}>Аккаунт</span>
              <span className={styles.userToolsSubtitle}>
                {session.user?.email}
              </span>
            </>
          ) : (
            <>
              <div className={styles.img}>
                <AnonymImg />
              </div>
              <button
                className={styles.loginButton}
                onClick={() => {
                  setIsActive(false);
                  setIsModalOpen(true);
                }}
              >
                Войти
              </button>
            </>
          )}
          <ul className={styles.list}>
            <li>
              <Link
                className={`${styles.link} ${pathname === '/order' ? styles.linkActive : ''}`}
                href="/order"
              >
                <span className={styles.icon}>
                  <BasketIcon className={styles.basketIcon} />
                </span>
                <span className={styles.label}>Корзина</span>
                {Boolean(cartItemsCount) && (
                  <span className={`${styles.count} ${styles.pink}`}>
                    {cartItemsCount}
                  </span>
                )}
              </Link>
              {Boolean(session) && <div className={styles.border}></div>}
            </li>
            {false && (
              <>
                <li>
                  <Link
                    className={`${styles.link} ${pathname === '/aside' ? styles.linkActive : ''}`}
                    href="/aside"
                  >
                    <span className={styles.icon}>
                      <HeartIcon />
                    </span>
                    <span className={styles.label}>Избранные товары</span>
                    <span className={styles.count}>2</span>
                  </Link>
                </li>
                <li>
                  <Link
                    className={`${styles.link} ${pathname === '/compare' ? styles.linkActive : ''}`}
                    href="/compare"
                  >
                    <span className={styles.icon}>
                      <CompareIcon />
                    </span>
                    <span className={styles.label}>Списки сравнения</span>
                  </Link>
                </li>
                <li>
                  <Link
                    className={`${styles.link} ${pathname === '/viewed' ? styles.linkActive : ''}`}
                    href="/viewed"
                  >
                    <span className={styles.icon}>
                      <ViewIcon />
                    </span>
                    <span className={styles.label}>Просмотренные</span>
                  </Link>
                </li>
              </>
            )}
            {session && (
              <li>
                <button className={styles.buttonExit} onClick={() => signOut()}>
                  <AnonymAccountIcon />
                  <span className={''}>Выйти</span>
                </button>
              </li>
            )}
          </ul>
        </div>
      )}
      {isModalOpen && <AuthModal closeModal={() => setIsModalOpen(false)} />}
    </div>
  );
};
