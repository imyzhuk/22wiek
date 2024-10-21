'use client';
import React, { useEffect, useRef } from 'react';
import styles from './ProductsPagination.module.css';
import { Pagination } from '@/components';
import { useTypedSelector } from '@/hooks/useTypedSelector';
import { productsOnPage } from '@/data/product';
import { useActions } from '@/hooks';

type ProductsPaginationProps = {};

export const ProductsPagination: React.FC<ProductsPaginationProps> = () => {
  const { setPage } = useActions();
  const productsCount = useTypedSelector((state) => state.product.count);
  const pagesCount = Math.ceil(productsCount / productsOnPage);
  const page = useTypedSelector((state) => state.product.page);

  useEffect(() => {
    window.scrollTo(0, 178);
  }, [page]);
  const onClickNextPage = () => {
    setPage(page + 1);
  };
  return (
    <>
      {pagesCount > page && (
        <button className={styles.moreButton} onClick={onClickNextPage}>
          Следующая страница
        </button>
      )}
      {pagesCount > 1 && (
        <Pagination
          page={page}
          onChangePage={setPage}
          className={styles.pagination}
          pagesCount={pagesCount}
        />
      )}
    </>
  );
};
