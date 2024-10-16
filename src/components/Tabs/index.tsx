'use client';

import React from 'react';
import styles from './Tabs.module.css';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

type TabsProps = {
  tabs: {
    id: number;
    name: string;
    count?: number;
    link: string;
  }[];
};

export const Tabs: React.FC<TabsProps> = ({ tabs }) => {
  const pathname = usePathname();

  return (
    <div className={styles.tabs}>
      {tabs.map(({ id, name, count, link }) => (
        <Link
          key={id}
          href={link}
          className={`${styles.tab} ${pathname === link ? styles.tabActive : ''}`}
        >
          <span className={styles.tabBody}>
            <span className={styles.tabTitle}>{name}</span>
            {count && <span className={styles.tabCounter}>{count}</span>}
          </span>
        </Link>
      ))}
    </div>
  );
};
