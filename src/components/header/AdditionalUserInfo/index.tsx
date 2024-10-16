'use client';
import React, { useEffect, useState } from 'react';
import styles from './AdditionalUserInfo.module.css';
import BasketIcon from '@icons/basketIcon.svg';
import LikeIcon from '@icons/heartIcon.svg';
import { CircleButton } from '@/components';
import Link from 'next/link';
import { AccountWidget } from '../AccountWidget';
import userAPI from '@/services/userAPI';

type AdditionalUserInfoProps = {};

export const AdditionalUserInfo: React.FC<AdditionalUserInfoProps> = () => {
  const [favoritesItemsCount, setFavoritesItemsCount] = useState<number>(0);
  const [cartItemsCount, setCartItemsCount] = useState<number>(0);

  useEffect(() => {
    /*
    const getAdditionalUserInfo = async () => {
      try {
        const { data } = await userAPI.getAdditionalInfo();
        setCartItemsCount(data.cartItemsCount);
        setFavoritesItemsCount(data.favoriteItemsCount);
      } catch (e) {
        console.log(e);
      }
    };

    getAdditionalUserInfo();*/
  }, []);

  return (
    <>
      <div className={styles.circleButtonContainer}>
        <Link href="/aside">
          <CircleButton>
            <span className={styles.iconsContainer}>
              {favoritesItemsCount > 0 && (
                <span
                  className={`${styles.countIcon} ${styles.favoritesCountIcon}`}
                >
                  {favoritesItemsCount}
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
