'use client';
import React, { useState } from 'react';
import styles from './MobileHeader.module.css';
import ProfileIcon from '@icons/profile.svg';
import BurgerMenuIcon from '@icons/burgerMenu.svg';
import BasketIcon from '@icons/basketIcon.svg';
import MobileLogo from '@icons/mobileLogo.svg';
import MobileHeaderBg from '@images/mobileHeaderBg.svg';
import { useTypedSelector } from '@/hooks';
import { ProfileModal } from '../ProfileModal';
import { MobileCatalogModal } from '../MobileCatalogModal';
import { SearchBar } from '../SearchBar';
import Link from 'next/link';

type MobileHeaderProps = {};

export const MobileHeader: React.FC<MobileHeaderProps> = () => {
  const cartItemsCount = useTypedSelector((state) => state.cart.cartItemsCount);
  const [isProfileModalOpen, setIsProfileModalOpen] = useState<boolean>(false);
  const [isCatalogModalOpen, setIsCatalogModalOpen] = useState<boolean>(false);
  return (
    <>
      <header className={styles.firstLine}>
        <MobileHeaderBg style={{ position: 'absolute' }} />
        <Link
          href="/"
          aria-label="Главная страница"
          className={styles.linkLogo}
        >
          <MobileLogo />
        </Link>
        <div className={styles.firstLineContent}>
          <div className={styles.leftPlace}>
            <button
              type="button"
              className={styles.link}
              aria-label="Каталог"
              onClick={() => setIsCatalogModalOpen(true)}
            >
              <BurgerMenuIcon />
            </button>
            <button
              type="button"
              className={styles.link}
              aria-label="Профиль"
              onClick={() => setIsProfileModalOpen(true)}
            >
              <ProfileIcon />
            </button>
          </div>
          <div className={styles.rightPlace}>
            <Link
              href="/order"
              aria-label="Корзина"
              className={`${styles.link} ${styles.basket}`}
            >
              <div className={styles.counter}>
                <span className={styles.count}>{cartItemsCount}</span>
              </div>
              <BasketIcon />
            </Link>
          </div>
        </div>
      </header>
      <div className={styles.searchBar}>
        <SearchBar />
      </div>
      <ProfileModal
        closeModal={() => setIsProfileModalOpen(false)}
        isVisible={isProfileModalOpen}
      />
      <MobileCatalogModal
        closeModal={() => setIsCatalogModalOpen(false)}
        isVisible={isCatalogModalOpen}
      />
    </>
  );
};
