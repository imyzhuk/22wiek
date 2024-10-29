'use client';

import React, { useEffect } from 'react';
import styles from './Header.module.css';
import { CircleButton } from '@/components';
import { promos } from '@/data/promo';
import { useActions, useOutsideClick } from '@/hooks';
import { SearchBar } from './SearchBar';
import { LocalityButton } from './LocalityButton';
import { CatalogPopup } from './CatalogPopup';
import { MoreItemsDropdown } from './MoreItemsDropdown';
import { CatalogIcon } from './CatalogIcon';
import { AdditionalUserInfo } from './AdditionalUserInfo';
import PartlyPayIcon from '@icons/partlyPayIcon.svg';
import LifeIcon from '@icons/life.svg';
import HomePhoneIcon from '@icons/home.svg';
import TelegramIcon from '@icons/telegram.svg';
import MessageIcon from '@icons/message.svg';
import EnvelopeIcon from '@icons/envelopeIcon.svg';
import PhoneIcon from '@icons/phoneIcon.svg';
import Logo from '@icons/logo.svg';
import A1Icon from '@icons/a1.svg';
import ViberIcon from '@icons/viber.svg';
import LineGradient from '@icons/lineGradient.svg';
import PromoIcon from '@icons/promoIcon.svg';
import ClockIcon from '@icons/clockIcon.svg';
import Link from 'next/link';
import cartAPI from '@/services/cartAPI';

type HeaderProps = {};

export const Header: React.FC<HeaderProps> = () => {
  const {
    ref: catalogRef,
    isActive: isCatalogActive,
    setIsActive: setIsCatalogActive,
  } = useOutsideClick<HTMLDivElement>(false);
  const { setCartProductIds } = useActions();

  useEffect(() => {
    const getCartItems = async () => {
      const {
        data: { productIds, count },
      } = await cartAPI.getCartProductIds();
      setCartProductIds({
        productIds,
        count,
      });
    };
    getCartItems();
  }, []);
  return (
    <header className={styles.header}>
      <div className={styles.headerWrapper}>
        <div className={styles.firstLine}>
          <div className={styles.rowWrapper}>
            <div className={styles.firstRow}>
              <LocalityButton />
              <ul className={styles.firstRowMenu}>
                <li className={styles.firstRowMenuItem}>
                  <Link
                    href="/special_offers/partly_pay.html"
                    className={`${styles.firstRowMenuLink} ${styles.firstRowMenuPayLink}`}
                  >
                    <PartlyPayIcon className={styles.firstRowMenuIcon} />
                    <span>Оплата частями</span>
                  </Link>
                </li>
                <li className={styles.firstRowMenuItem}>
                  <Link
                    href="/special_offers/bonus.html"
                    className={styles.firstRowMenuLink}
                  >
                    Бонусная программа
                  </Link>
                </li>
                <li className={styles.firstRowMenuItem}>
                  <MoreItemsDropdown>
                    <li className={styles.moreButtonItem}>
                      <Link className={styles.moreButtonLink} href="/not-found">
                        Оплата
                      </Link>
                    </li>
                    <li className={styles.moreButtonItem}>
                      <Link className={styles.moreButtonLink} href="/not-found">
                        Доставка
                      </Link>
                    </li>
                    <li className={styles.moreButtonItem}>
                      <Link className={styles.moreButtonLink} href="/not-found">
                        Самовывоз
                      </Link>
                    </li>
                  </MoreItemsDropdown>
                </li>
              </ul>
              <ul className={styles.communications}>
                <li className={styles.communicationItem}>
                  <a
                    href="https://www.viber.com/22wiek.by"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.communicationItemBox}
                  >
                    <div
                      className={`${styles.communicationIcon} ${styles.communicationIconViber}`}
                      role="presentation"
                    >
                      <ViberIcon />
                    </div>
                    <span>Viber</span>
                  </a>
                </li>
                <li className={styles.communicationItem}>
                  <div className={styles.communicationItemBox}>
                    <div
                      className={`${styles.communicationIcon} ${styles.communicationIconA1}`}
                      role="presentation"
                    >
                      <A1Icon />
                    </div>
                    <span>+375 29 302 10 21</span>
                  </div>
                </li>
                <li className={styles.communicationItem}>
                  <MoreItemsDropdown>
                    <li className={styles.moreButtonItem}>
                      <div className={styles.moreButtonLine}>
                        <LifeIcon className={styles.moreButtonIcon} />
                        <span>+375 25 502 10 21</span>
                      </div>
                    </li>
                    <li className={styles.moreButtonItem}>
                      <div className={styles.moreButtonLine}>
                        <HomePhoneIcon className={styles.moreButtonIcon} />
                        <span>+375 17 302 10 21</span>
                      </div>
                    </li>
                    <li className={styles.moreButtonItem}>
                      <a
                        className={styles.moreButtonLink}
                        href="https://t.me/e22wiekbot"
                      >
                        <TelegramIcon
                          className={`${styles.moreButtonIcon} ${styles.telegramIcon}`}
                        />
                        <span>Telegram</span>
                      </a>
                    </li>
                    <li className={styles.moreButtonItem}>
                      <a
                        className={styles.moreButtonLink}
                        href="mailto:company@22wiek.by"
                      >
                        <EnvelopeIcon className={styles.moreButtonIcon} />
                        <span>Почта</span>
                      </a>
                    </li>
                    <li className={styles.moreButtonItem}>
                      <button className={styles.moreButtonLink}>
                        <PhoneIcon className={styles.moreButtonIcon} />
                        <span>Заказать звонок</span>
                      </button>
                    </li>
                    <li className={styles.moreButtonItem}>
                      <button className={styles.moreButtonLink}>
                        <MessageIcon className={styles.moreButtonIcon} />
                        <span>Написать нам</span>
                      </button>
                    </li>
                    <li
                      className={`${styles.moreButtonItem} ${styles.moreButtonItemLast}`}
                    >
                      <Link
                        className={`${styles.moreButtonLink} ${styles.moreButtonLinkLast}`}
                        href="/services/contacts"
                      >
                        <span>Контакты</span>
                      </Link>
                    </li>
                  </MoreItemsDropdown>
                </li>
              </ul>
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
      {isCatalogActive && <CatalogPopup ref={catalogRef} />}
    </header>
  );
};
