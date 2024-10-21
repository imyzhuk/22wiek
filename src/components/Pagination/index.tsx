import React from 'react';
import styles from './Pagination.module.css';
import MiniRightArrow from '@icons/miniRightArrow.svg';

type PaginationProps = {
  className?: string;
  pagesCount: number;
  page: number;
  onChangePage: (page: number) => void;
};

export const Pagination: React.FC<PaginationProps> = ({
  className,
  pagesCount,
  page,
  onChangePage,
}) => {
  const onClickPrevPage = () => {
    onChangePage(page - 1);
  };

  const onClickNextPage = () => {
    onChangePage(page + 1);
  };

  const onClickPage = (newPage: number) => {
    onChangePage(newPage);
  };
  return (
    <nav className={`${styles.pagination} ${className}`}>
      <ul className={styles.list}>
        <li className={styles.item}>
          <button
            className={styles.arrowBtn}
            disabled={page === 1}
            onClick={onClickPrevPage}
          >
            <MiniRightArrow className={styles.arrow} />
          </button>
        </li>
        {[...Array(pagesCount)].map((_, index) => (
          <li key={index} className={styles.item}>
            <button
              onClick={() => onClickPage(index + 1)}
              className={`${styles.link} ${page === index + 1 ? styles.linkActive : ''}`}
            >
              {index + 1}
            </button>
          </li>
        ))}
        <li className={styles.item}>
          <button
            className={styles.arrowBtn}
            disabled={page === pagesCount}
            onClick={onClickNextPage}
          >
            <MiniRightArrow />
          </button>
        </li>
      </ul>
    </nav>
  );
};
