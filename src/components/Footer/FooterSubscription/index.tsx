import React from 'react';
import styles from './FooterSubscription.module.css';
import MailboxIcon from '@icons/mailbox.svg';
import SendLetterIcon from '@icons/sendLetter.svg';
import { Input } from '@/components';
type FooterSubscriptionProps = {};

export const FooterSubscription: React.FC<FooterSubscriptionProps> = () => {
  return (
    <div className={styles.subscription}>
      <MailboxIcon />
      <span className={styles.text}>
        Подпишитесь и{' '}
        <span className={styles.bold}>получайте больше скидок</span>
        &nbsp;на весь ассортимент наших товаров!
      </span>
      <form className={styles.form}>
        <Input placeholder="Введите почту" onChange={() => null} />
        <button className={styles.button}>
          <SendLetterIcon />
        </button>
      </form>
    </div>
  );
};
