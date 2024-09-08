import React from 'react';
import styles from './FooterSubscription.module.css';
import MailboxIcon from '../../../../public/mailbox.svg';
import SendLetterIcon from '../../../../public/sendLetter.svg';
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
        <Input placeholder="Введите почту" />
        <button className={styles.button}>
          <SendLetterIcon />
        </button>
      </form>
    </div>
  );
};