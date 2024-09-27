'use client';

import React from 'react';
import styles from './Header.module.css';
import { CircleButton } from '@/components';
import { promos } from '@/data/promo';
import { useOutsideClick } from '@/hooks';
import { SearchBar } from './SearchBar';
import { LocalityButton } from './LocalityButton';
import { CatalogPopup } from './CatalogPopup';
import { MoreItemsDropdown } from './MoreItemsDropdown';
import { AccountWidget } from './AccountWidget';
import { CatalogIcon } from './CatalogIcon';
import BasketIcon from '@Images/basketIcon.svg';
import LikeIcon from '@Images/heartIcon.svg';
import PartlyPayIcon from '@Images/partlyPayIcon.svg';
import LifeIcon from '@Images/life.svg';
import HomePhoneIcon from '@Images/home.svg';
import TelegramIcon from '@Images/telegram.svg';
import MessageIcon from '@Images/message.svg';
import EnvelopeIcon from '@Images/envelopeIcon.svg';
import PhoneIcon from '@Images/phoneIcon.svg';
import Logo from '@Images/logo.svg';
import A1Icon from '@Images/a1.svg';
import ViberIcon from '@Images/viber.svg';
import LineGradient from '@Images/lineGradient.svg';
import PromoIcon from '@Images/promoIcon.svg';
import ClockIcon from '@Images/clockIcon.svg';

type HeaderProps = {};

export const Header: React.FC<HeaderProps> = () => {
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
              <ul className={styles.firstRowMenu}>
                <li className={styles.firstRowMenuItem}>
                  <a
                    href="/special_offers/partly_pay.html"
                    className={`${styles.firstRowMenuLink} ${styles.firstRowMenuPayLink}`}
                  >
                    <PartlyPayIcon className={styles.firstRowMenuIcon} />
                    <span>Оплата частями</span>
                  </a>
                </li>
                <li className={styles.firstRowMenuItem}>
                  <a
                    href="/special_offers/bonus.html"
                    className={styles.firstRowMenuLink}
                  >
                    Бонусная программа
                  </a>
                </li>
                <li className={styles.firstRowMenuItem}>
                  <MoreItemsDropdown>
                    <li className={styles.moreButtonItem}>
                      <a className={styles.moreButtonLink} href="/not-found">
                        Оплата
                      </a>
                    </li>
                    <li className={styles.moreButtonItem}>
                      <a className={styles.moreButtonLink} href="/not-found">
                        Доставка
                      </a>
                    </li>
                    <li className={styles.moreButtonItem}>
                      <a className={styles.moreButtonLink} href="/not-found">
                        Самовывоз
                      </a>
                    </li>
                  </MoreItemsDropdown>
                </li>
              </ul>
              <ul className={styles.communications}>
                <li className={styles.communicationItem}>
                  <a
                    href="https://www.viber.com/21vek.by"
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
                        href="https://t.me/e21vekbot"
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
                        href="mailto:21@21vek.by"
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
                      <a
                        className={`${styles.moreButtonLink} ${styles.moreButtonLinkLast}`}
                        href="/services/contacts.html"
                      >
                        <span>Контакты</span>
                      </a>
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
              <a
                className={styles.logoLink}
                href="/"
                title="На главную страницу"
              >
                <Logo />
              </a>
              <div className={styles.catalogContainer}>
                <CircleButton
                  onClick={() => setIsCatalogActive((prev) => !prev)}
                >
                  <CatalogIcon />
                  <span className={styles.catalogText}>Каталог товаров</span>
                </CircleButton>
              </div>
              <SearchBar />
              <div className={styles.circleButtonContainer}>
                <a href="/aside">
                  <CircleButton>
                    <LikeIcon />
                  </CircleButton>
                </a>
              </div>
              <AccountWidget />
              <div className={styles.circleButtonContainer}>
                <a href="/order">
                  <CircleButton>
                    <span className={styles.orderWrapper}>
                      <BasketIcon className={styles.orderIcon} />
                      <span>Корзина</span>
                    </span>
                  </CircleButton>
                </a>
              </div>
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
                <a href="/special_offers/promo">
                  <PromoIcon className={styles.promoIcon} />
                  Все акции
                </a>
              </li>
              {promos.map((promo) => (
                <li className={styles.promoItem} key={promo.url}>
                  <a href={promo.url}>{promo.name}</a>
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
