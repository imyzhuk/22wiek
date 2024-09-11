import React from 'react';
import styles from './Selection.module.css';
import Image from 'next/image';

type SelectionProps = {
  link: string;
  image: string;
  name: string;
};

export const Selection: React.FC<SelectionProps> = ({ name, image, link }) => {
  return (
    <li>
      <a href={link} className={styles.link}>
        <span className={styles.imageWrapper}>
          <Image src={image} alt={name} fill style={{ objectFit: 'contain' }} />
        </span>
        <span className={styles.name}>{name}</span>
      </a>
    </li>
  );
};
