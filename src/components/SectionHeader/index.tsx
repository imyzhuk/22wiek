import React, { ReactNode } from 'react';
import styles from './SectionHeader.module.css';

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
        <a href={link} className={styles.titleLink}>
          {linkText}
        </a>
      </div>
      {children}
    </header>
  );
};
