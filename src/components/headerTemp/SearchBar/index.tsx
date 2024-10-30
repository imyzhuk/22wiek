'use client';

import React, { useEffect, useState } from 'react';
import styles from './SearchBar.module.css';
import SearchIcon from '@icons/searchIcon.svg';
import CrossExitIcon from '@icons/crossExitIcon.svg';
import { useOutsideClick } from '@/hooks';
import searchAPI from '@/services/searchAPI';
import { SearchResponse } from '@/types/search';
import { useDebounce } from '@/hooks';
import Link from 'next/link';
import Image from 'next/image';
import { formatPrice } from '@/utils';
import SearchLoaderIcon from '@icons/searchLoaderIcon.svg';

type SearchBarProps = {};

export const SearchBar: React.FC<SearchBarProps> = () => {
  const [searchValue, setSearchValue] = useState<string>('');
  const [searchedProducts, setSearchedProducts] = useState<
    SearchResponse['products'] | []
  >([]);
  const [searchedCategories, setSearchedCategories] = useState<
    SearchResponse['categories'] | []
  >([]);
  const { ref, isActive, setIsActive } = useOutsideClick<HTMLDivElement>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useDebounce(
    async () => {
      if (!searchValue) {
        setIsActive(false);
        return;
      }
      setIsLoading(true);
      const { data } = await searchAPI.search(searchValue);
      setSearchedProducts(data.products);
      setSearchedCategories(data.categories);
      if (data.products.length > 0 || data.categories.length > 0) {
        setIsActive(true);
      }
      setIsLoading(false);
    },
    800,
    [searchValue],
  );

  return (
    <>
      <div className={styles.searchWidget} ref={ref}>
        <search role="search" className={styles.container}>
          <button type="button" className={styles.searchBtn} disabled>
            <SearchIcon />
          </button>
          <input
            id="catalogSearch"
            type="text"
            placeholder="Поиск товаров"
            className={styles.input}
            autoComplete="off"
            spellCheck="false"
            onChange={(e) => setSearchValue(e.target.value)}
            value={searchValue}
          />
          {isLoading ? (
            <div className={styles.loader}>
              <SearchLoaderIcon />
            </div>
          ) : (
            <button
              type="button"
              onClick={() => setSearchValue('')}
              className={`${styles.clearBtn} ${searchValue ? styles.clearBtnVisible : ''}`}
            >
              <CrossExitIcon />
            </button>
          )}
        </search>
        {isActive && (
          <div className={styles.popup}>
            <div className={styles.popupWrapper}>
              {searchedCategories.length > 0 && (
                <div className={styles.popupGroup}>
                  <div className={styles.popupGroupTitle}>Категории</div>
                  <ul className={styles.popupList}>
                    {searchedCategories.map((category) => (
                      <li key={category.id} className={styles.popupItem}>
                        <a
                          href={category.link}
                          className={styles.popupItemLink}
                          onClick={() => setIsActive((prev) => !prev)}
                        >
                          {category.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {searchedProducts.length > 0 && (
                <div className={styles.popupGroup}>
                  <div className={styles.popupGroupTitle}>Товары</div>
                  <ul className={styles.popupList}>
                    {searchedProducts.map((product) => (
                      <li key={product.id} className={styles.popupItem}>
                        <Link
                          href={product.link}
                          className={styles.popupItemLink}
                          onClick={() => setIsActive((prev) => !prev)}
                        >
                          <div className={styles.popupItemImageWrapper}>
                            <Image
                              src={product.preview}
                              alt={product.name}
                              style={{ objectFit: 'contain' }}
                              fill
                              className={styles.popupItemImage}
                            />
                          </div>
                          <div className={styles.popupItemInfo}>
                            <div className={styles.popupItemName}>
                              {product.name}
                            </div>
                            <div className={styles.popupItemPrice}>
                              {formatPrice(product.price)} р.
                            </div>
                          </div>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
      {isActive && (
        <>
          <div className={styles.overlay}></div>
          <div className={styles.top}></div>
        </>
      )}
    </>
  );
};
