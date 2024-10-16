'use client';
import React, { useEffect, useState } from 'react';
import styles from './AdditionalUserInfo.module.css';
import BasketIcon from '@icons/basketIcon.svg';
import LikeIcon from '@icons/heartIcon.svg';
import { CircleButton } from '@/components';
import Link from 'next/link';
import { AccountWidget } from '../AccountWidget';
import { useTypedSelector } from '@/hooks/useTypedSelector';

type AdditionalUserInfoProps = {};

export const AdditionalUserInfo: React.FC<AdditionalUserInfoProps> = () => {
  const cartItemsCount = useTypedSelector((state) => state.cart.cartItemsCount);

  return (
    <>
      <div className={styles.circleButtonContainer}>
        <Link href="/aside">
          <CircleButton>
            <span className={styles.iconsContainer}>
              {false && (
                <span
                  className={`${styles.countIcon} ${styles.favoritesCountIcon}`}
                >
                  0
                </span>
              )}
              <LikeIcon />
            </span>
          </CircleButton>
        </Link>
      </div>
      <AccountWidget />
      <div className={styles.circleButtonContainer}>
        <Link href="/order">
          <CircleButton>
            <span className={styles.orderWrapper}>
              <span className={styles.iconsContainer}>
                {cartItemsCount > 0 && (
                  <span className={styles.countIcon}>{cartItemsCount}</span>
                )}
                <BasketIcon className={styles.orderIcon} />
              </span>
              <span>Корзина</span>
            </span>
          </CircleButton>
        </Link>
      </div>
    </>
  );
};
