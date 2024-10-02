import React from 'react';
import styles from './Breadcrumps.module.css';
import MiniRightArrow from '@Images/miniRightArrow.svg';

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
            <a href={link} className={styles.link}>
              {name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
