import React from 'react';
import styles from './Networks.module.css';
import VKIcon from '@icons/vk.svg';
import FacebookIcon from '@icons/facebook.svg';
import InstagramIcon from '@icons/instagram.svg';
import YoutubeIcon from '@icons/youtube.svg';
import DzenIcon from '@icons/dzen.svg';

type NetworksProps = {};

export const Networks: React.FC<NetworksProps> = () => {
  return (
    <ul className={styles.networks}>
      <li className={styles.network}>
        <a href="#!" className={`${styles.link} ${styles.vk}`}>
          <VKIcon />
        </a>
      </li>
      <li className={styles.network}>
        <a href="#!" className={`${styles.link} ${styles.facebook}`}>
          <FacebookIcon />
        </a>
      </li>
      <li className={styles.network}>
        <a href="#!" className={`${styles.link} ${styles.instagram}`}>
          <InstagramIcon />
        </a>
      </li>
      <li className={styles.network}>
        <a href="#!" className={`${styles.link} ${styles.youtube}`}>
          <YoutubeIcon />
        </a>
      </li>
      <li className={styles.network}>
        <a href="#!" className={`${styles.link} ${styles.dzen}`}>
          <DzenIcon />
        </a>
      </li>
    </ul>
  );
};
