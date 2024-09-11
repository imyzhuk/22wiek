import React from 'react';
import styles from './BrandCrisps.module.css';

type BrandCrispsProps = {
  items?: {
    id: number;
    name: string;
    link: string;
  }[];
};

export const BrandCrisps: React.FC<BrandCrispsProps> = ({ items }) => {
  if (!items) return null;

  return (
    <ul className={styles.list}>
      {items.map((item) => (
        <li key={item.id}>
          <a href={item.link} className={styles.link}>
            {item.name}
          </a>
        </li>
      ))}
    </ul>
  );
};
