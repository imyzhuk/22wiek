import React from 'react';
import styles from './Footer.module.css';
import BelcartIcon from '@icons/belcart.svg';
import MastercardIcon from '@icons/mastercard.svg';
import VisaIcon from '@icons/visa.svg';
import ERIPIcon from '@icons/erip.svg';
import WebpayIcon from '@images/webpay.png';
import { FooterSubscription } from './FooterSubscription';
import { SitemapBlock } from './SitemapBlock';
import { Contacts } from './Contacts';
import { Networks } from './Networks';
import Image from 'next/image';

type FooterProps = {};

export const Footer: React.FC<FooterProps> = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerWrapper}>
        <FooterSubscription />
        <SitemapBlock />
        <Contacts />
        <Networks />
        <div className={styles.info}>
          <p className={styles.infoParagraph}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
            assumenda, repellat sint delectus quos ipsum odit impedit dicta
            tenetur explicabo totam sunt, corrupti voluptate veritatis
            blanditiis non quod ab saepe.
          </p>
          <p className={styles.infoParagraph}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
            assumenda, repellat sint veritatis blanditiis non quod ab saepe.
          </p>
          <p className={styles.infoParagraph}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
            assumenda, repellat sint veritatis blanditiis non quod ab saepe.
          </p>
          <p className={styles.infoParagraph}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
            assumenda, repellat sint veritatis blanditiis non quod ab saepe.
          </p>
        </div>
        <ul className={styles.paymentWays}>
          <li aria-label="Webpay">
            <Image src={WebpayIcon} alt="Webpay" width={72} />
          </li>
          <li aria-label="Белкарт">
            <div className="" role="presentation">
              <BelcartIcon />
            </div>
          </li>
          <li aria-label="ЕРИП">
            <div className="" role="presentation">
              <ERIPIcon />
            </div>
          </li>
          <li aria-label="Mastercard">
            <div className="" role="presentation">
              <MastercardIcon />
            </div>
          </li>
          <li aria-label="Visa">
            <div className="" role="presentation">
              <VisaIcon />
            </div>
          </li>
        </ul>
      </div>
    </footer>
  );
};
