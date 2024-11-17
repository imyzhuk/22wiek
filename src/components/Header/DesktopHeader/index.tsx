'use client';

import React, { useEffect } from 'react';
import styles from './DesktopHeader.module.css';
import { CircleButton } from '@/components';
import { promos } from '@/data/promo';
import { useActions, useOutsideClick } from '@/hooks';
import { SearchBar } from '../SearchBar';
import { LocalityButton } from '../LocalityButton';
import { CatalogPopup } from '../CatalogPopup';
import { CatalogIcon } from '../CatalogIcon';
import { AdditionalUserInfo } from '../AdditionalUserInfo';
import Logo from '@icons/logo.svg';
import LineGradient from '@icons/lineGradient.svg';
import PromoIcon from '@icons/promoIcon.svg';
import ClockIcon from '@icons/clockIcon.svg';
import Link from 'next/link';
import cartAPI from '@/services/cartAPI';
import { useSession } from 'next-auth/react';
import { useRouter, useSearchParams } from 'next/navigation';
import toast from 'react-hot-toast';

type DesktopHeaderProps = {};

export const DesktopHeader: React.FC<DesktopHeaderProps> = () => {
  const {
    ref: catalogRef,
    isActive: isCatalogActive,
    setIsActive: setIsCatalogActive,
  } = useOutsideClick<HTMLDivElement>(false);

  return (
    <header className={styles.header}>
      <div className={styles.headerWrapper}>
        <div className={styles.firstLine}>
          <div className={styles.rowWrapper}>
            <div className={styles.firstRow}>
              <LocalityButton />
              <div className={styles.workingTime}>
                <div className={styles.workingTimeIcon}>
                  <div role="presentation">
                    <ClockIcon />
                  </div>
                </div>
                <div className={styles.workingTimeText}>
                  контакт-центр
                  <div>
                    с&nbsp;<time>8:00</time>&nbsp;до&nbsp;<time>22:00</time>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.secondLine}>
          <div className={styles.rowWrapper}>
            <div className={styles.secondRow}>
              <Link
                className={styles.logoLink}
                href="/"
                title="На главную страницу"
              >
                <Logo />
              </Link>
              <div className={styles.catalogContainer}>
                <CircleButton
                  onClick={() => setIsCatalogActive((prev) => !prev)}
                >
                  <CatalogIcon />
                  <span className={styles.catalogText}>Каталог товаров</span>
                </CircleButton>
              </div>
              <SearchBar />
              <AdditionalUserInfo />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.thirdLine}>
        <div className={styles.rowWrapper}>
          <LineGradient className={styles.thirdLineGradient} />
          <div className={styles.thirdRow}>
            <ul className={styles.promoList}>
              <li className={`${styles.promoItem} ${styles.fixedPromoItem}`}>
                <Link href="/special_offers/promo">
                  <PromoIcon className={styles.promoIcon} />
                  Все акции
                </Link>
              </li>
              {promos.map((promo) => (
                <li className={styles.promoItem} key={promo.url}>
                  <Link href={promo.url}>{promo.name}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      {isCatalogActive && (
        <CatalogPopup
          onClose={() => setIsCatalogActive(false)}
          ref={catalogRef}
        />
      )}
    </header>
  );
};
