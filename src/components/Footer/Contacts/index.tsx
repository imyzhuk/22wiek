import React from 'react';
import styles from './Contacts.module.css';
import A1Icon from '@icons/a1.svg';
import LifeMobileIcon from '@icons/life.svg';
import HomePhoneIcon from '@icons/home.svg';
import ViberIcon from '@icons/viber.svg';
import TelegramIcon from '@icons/telegram.svg';
import EmailIcon from '@icons/email.svg';
import MessageIcon from '@icons/message.svg';

type ContactsProps = {};

// TODO: implement feedback mechanism

export const Contacts: React.FC<ContactsProps> = () => {
  return (
    <div className={styles.container}>
      <ul className={styles.contacts}>
        <li className={styles.contact}>
          <A1Icon />
          <span>+375 29 111 11 11</span>
        </li>
        <li className={styles.contact}>
          <LifeMobileIcon />
          <span>+375 25 222 22 22</span>
        </li>
        <li className={styles.contact}>
          <HomePhoneIcon />
          <span>+375 17 333 33 33</span>
        </li>
        <li className={`${styles.contact} ${styles.link} ${styles.viber}`}>
          <ViberIcon />
          <a
            href="https://www.viber.com/22wiek.by"
            target="_blank"
            rel="noopener noreferrer"
          >
            Viber
          </a>
        </li>
        <li className={`${styles.contact} ${styles.link} ${styles.telegram}`}>
          <TelegramIcon />
          <a
            href="http://t.me/e22wiekbot"
            target="_blank"
            rel="noopener noreferrer"
          >
            Telegram
          </a>
        </li>
        <li className={`${styles.contact} ${styles.link} ${styles.email}`}>
          <EmailIcon />
          <a
            href="mailto:21@22wiek.by"
            target="_blank"
            rel="noopener noreferrer"
          >
            Почта
          </a>
        </li>
        {false && (
          <li className={`${styles.contact} ${styles.link}`}>
            <button className={styles.button}>
              <MessageIcon />
              <span>Написать нам</span>
            </button>
          </li>
        )}
      </ul>
    </div>
  );
};
