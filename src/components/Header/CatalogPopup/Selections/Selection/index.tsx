import React from 'react';
import styles from './Selection.module.css';
import Image from 'next/image';
import Link from 'next/link';

type SelectionProps = {
  link: string;
  image: string;
  name: string;
  onClick: () => void;
};

export const Selection: React.FC<SelectionProps> = ({
  name,
  image,
  link,
  onClick,
}) => {
  return (
    <li>
      <Link href={link} className={styles.link} onClick={onClick}>
        <span className={styles.imageWrapper}>
          <Image src={image} alt={name} fill style={{ objectFit: 'contain' }} />
        </span>
        <span className={styles.name}>{name}</span>
      </Link>
    </li>
  );
};
