import React from 'react';
import styles from './Pagination.module.css';
import MiniRightArrow from '@Images/miniRightArrow.svg';
import Link from 'next/link';

type PaginationProps = {
  pagesCount: number;
  currentPage: number;
  className?: string;
};

export const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  pagesCount,
  className,
}) => {
  return (
    <nav className={`${styles.pagination} ${className}`}>
      <ul className={styles.list}>
        <li className={styles.item}>
          <button className={styles.arrowBtn} disabled={currentPage === 1}>
            <MiniRightArrow className={styles.arrow} />
          </button>
        </li>
        {[...Array(pagesCount)].map((_, index) => (
          <li key={index} className={styles.item}>
            <Link
              href=""
              className={`${styles.link} ${currentPage === index + 1 ? styles.linkActive : ''}`}
            >
              {index + 1}
            </Link>
          </li>
        ))}
        <li className={styles.item}>
          <button
            className={styles.arrowBtn}
            disabled={currentPage === pagesCount}
          >
            <MiniRightArrow />
          </button>
        </li>
      </ul>
    </nav>
  );
};
