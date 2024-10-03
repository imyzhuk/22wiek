'use client';

import React, { useState } from 'react';
import styles from './AccountWidget.module.css';
import { CircleButton } from '@/components';
import AccountIcon from '@Images/accountIcon.svg';
import AnonymImg from '@Images/anonym.svg';
import BasketIcon from '@Images/basketIcon.svg';
import HeartIcon from '@Images/heartIcon.svg';
import CompareIcon from '@Images/compareIcon.svg';
import ViewIcon from '@Images/viewIcon.svg';
import { usePathname } from 'next/navigation';
import { useOutsideClick } from '@/hooks';
import { AuthModal } from './AuthModal';
import Link from 'next/link';

type AccountWidgetProps = {};

export const AccountWidget: React.FC<AccountWidgetProps> = () => {
  const { ref, isActive, setIsActive } = useOutsideClick<HTMLDivElement>(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const pathname = usePathname();

  return (
    <div className={styles.container}>
      <CircleButton onClick={() => setIsActive(!isActive)} isActive={isActive}>
        <span className={styles.wrapper}>
          <AccountIcon />
          <span className={styles.text}>Аккаунт</span>
        </span>
      </CircleButton>
      {isActive && (
        <div ref={ref} className={styles.dropdown}>
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
          <ul className={styles.list}>
            <li className={styles.item}>
              <Link
                className={`${styles.link} ${pathname === '/order' ? styles.linkActive : ''}`}
                href="/order"
              >
                <span className={styles.icon}>
                  <BasketIcon className={styles.basketIcon} />
                </span>
                <span className={styles.label}>Корзина</span>
                <span className={`${styles.count} ${styles.pink}`}>2</span>
              </Link>
            </li>
            <li className={styles.item}>
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
            <li className={styles.item}>
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
            <li className={styles.item}>
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
          </ul>
        </div>
      )}
      {isModalOpen && <AuthModal closeModal={() => setIsModalOpen(false)} />}
    </div>
  );
};
