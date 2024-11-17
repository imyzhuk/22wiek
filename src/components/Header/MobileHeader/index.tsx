'use client';
import React from 'react';
import styles from './MobileHeader.module.css';
import ProfileIcon from '@icons/profile.svg';
import BurgerMenuIcon from '@icons/burgerMenu.svg';
import BasketIcon from '@icons/basketIcon.svg';
import MobileLogo from '@icons/mobileLogo.svg';
import MobileHeaderBg from '@images/mobileHeaderBg.svg';
import { useTypedSelector } from '@/hooks';

type MobileHeaderProps = {};

export const MobileHeader: React.FC<MobileHeaderProps> = () => {
  const cartItemsCount = useTypedSelector((state) => state.cart.cartItemsCount);

  return (
    <div className={styles.firstLine}>
      <MobileHeaderBg style={{ position: 'absolute' }} />
      <a href="/" aria-label="Главная страница" className={styles.linkLogo}>
        <MobileLogo />
      </a>
      <div className={styles.firstLineContent}>
        <div className={styles.leftPlace}>
          <button type="button" className={styles.link} aria-label="Каталог">
            <BurgerMenuIcon />
          </button>
          <button type="button" className={styles.link} aria-label="Профиль">
            <ProfileIcon />
          </button>
        </div>
        <div className={styles.rightPlace}>
          <a
            href="/order"
            aria-label="Корзина"
            className={`${styles.link} ${styles.basket}`}
          >
            <div className={styles.counter}>
              <span className={styles.count}>{cartItemsCount}</span>
            </div>
            <BasketIcon />
          </a>
        </div>
      </div>
    </div>
  );
};
