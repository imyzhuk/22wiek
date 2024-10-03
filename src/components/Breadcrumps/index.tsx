import React from 'react';
import styles from './Breadcrumps.module.css';
import MiniRightArrow from '@Images/miniRightArrow.svg';
import Link from 'next/link';

type BreadcrumpsProps = {
  items: {
    name: string;
    link: string;
  }[];
};

export const Breadcrumps: React.FC<BreadcrumpsProps> = ({ items }) => {
  return (
    <nav>
      <ul className={styles.list}>
        {items.map(({ name, link }, index) => (
          <li key={link} className={styles.item}>
            {index !== 0 && <MiniRightArrow />}
            <Link href={link} className={styles.link}>
              {name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
