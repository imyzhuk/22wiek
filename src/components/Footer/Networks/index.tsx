import React from 'react';
import styles from './Networks.module.css';
import VKIcon from '@Images/vk.svg';
import FacebookIcon from '@Images/facebook.svg';
import InstagramIcon from '@Images/instagram.svg';
import YoutubeIcon from '@Images/youtube.svg';
import DzenIcon from '@Images/dzen.svg';

type NetworksProps = {};

export const Networks: React.FC<NetworksProps> = () => {
  return (
    <ul className={styles.networks}>
      <li className={styles.network}>
        <a href="" className={`${styles.link} ${styles.vk}`}>
          <VKIcon />
        </a>
      </li>
      <li className={styles.network}>
        <a href="" className={`${styles.link} ${styles.facebook}`}>
          <FacebookIcon />
        </a>
      </li>
      <li className={styles.network}>
        <a href="" className={`${styles.link} ${styles.instagram}`}>
          <InstagramIcon />
        </a>
      </li>
      <li className={styles.network}>
        <a href="" className={`${styles.link} ${styles.youtube}`}>
          <YoutubeIcon />
        </a>
      </li>
      <li className={styles.network}>
        <a href="" className={`${styles.link} ${styles.dzen}`}>
          <DzenIcon />
        </a>
      </li>
    </ul>
  );
};
