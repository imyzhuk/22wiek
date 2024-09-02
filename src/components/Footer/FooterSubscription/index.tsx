import React from 'react';
import styles from './FooterSubscription.module.css';
import MailboxIcon from '../../../../public/mailbox.svg';
import SendLetterIcon from '../../../../public/sendLetter.svg';
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
        <div className={styles.inputWrapper}>
          <input
            type="text"
            className={styles.input}
            placeholder="Введите почту"
          />
        </div>
        <button className={styles.button}>
          <SendLetterIcon />
        </button>
      </form>
    </div>
  );
};
