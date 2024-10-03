import React, { ReactNode } from 'react';
import styles from './SectionHeader.module.css';
import Link from 'next/link';

type SectionHeaderProps = {
  children: ReactNode;
  title: string;
  linkText: string;
  link: string;
};

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  children,
  link,
  title,
  linkText,
}) => {
  return (
    <header className={styles.header}>
      <div className={styles.titleContainer}>
        <h5 className={styles.title}>{title}</h5>
        <Link href={link} className={styles.titleLink}>
          {linkText}
        </Link>
      </div>
      {children}
    </header>
  );
};
