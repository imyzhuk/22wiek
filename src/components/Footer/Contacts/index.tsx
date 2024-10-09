import React from 'react';
import styles from './Contacts.module.css';
import A1Icon from '@Images/a1.svg';
import LifeMobileIcon from '@Images/life.svg';
import HomePhoneIcon from '@Images/home.svg';
import ViberIcon from '@Images/viber.svg';
import TelegramIcon from '@Images/telegram.svg';
import EmailIcon from '@Images/email.svg';
import MessageIcon from '@Images/message.svg';

type ContactsProps = {};

export const Contacts: React.FC<ContactsProps> = () => {
  return (
    <div className={styles.container}>
      <ul className={styles.contacts}>
        <li className={styles.contact}>
          <A1Icon />
          <span>+375 29 302 10 21</span>
        </li>
        <li className={styles.contact}>
          <LifeMobileIcon />
          <span>+375 25 502 10 21</span>
        </li>
        <li className={styles.contact}>
          <HomePhoneIcon />
          <span>+375 17 302 10 21</span>
        </li>
        <li className={`${styles.contact} ${styles.link} ${styles.viber}`}>
          <ViberIcon />
          <a
            href="https://www.viber.com/21vek.by"
            target="_blank"
            rel="noopener noreferrer"
          >
            Viber
          </a>
        </li>
        <li className={`${styles.contact} ${styles.link} ${styles.telegram}`}>
          <TelegramIcon />
          <a
            href="http://t.me/e21vekbot"
            target="_blank"
            rel="noopener noreferrer"
          >
            Telegram
          </a>
        </li>
        <li className={`${styles.contact} ${styles.link} ${styles.email}`}>
          <EmailIcon />
          <a
            href="mailto:21@21vek.by"
            target="_blank"
            rel="noopener noreferrer"
          >
            Почта
          </a>
        </li>
        <li className={`${styles.contact} ${styles.link}`}>
          <button className={styles.button}>
            <MessageIcon />
            <span>Написать нам</span>
          </button>
        </li>
      </ul>
    </div>
  );
};
