import React from 'react';
import styles from './Networks.module.css';
import VKIcon from '../../../../public/vk.svg';
import FacebookIcon from '../../../../public/facebook.svg';
import InstagramIcon from '../../../../public/instagram.svg';
import YoutubeIcon from '../../../../public/youtube.svg';
import DzenIcon from '../../../../public/dzen.svg';

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
