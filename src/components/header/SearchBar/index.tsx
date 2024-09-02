import React from 'react';
import styles from './SearchBar.module.css';
import SearchIcon from '../../../../public/searchIcon.svg';

type SearchBarProps = {};

export const SearchBar: React.FC<SearchBarProps> = () => {
  return (
    <div className={styles.container}>
      <button type="button" className={styles.searchBtn} disabled>
        <SearchIcon />
      </button>
      <input
        id="catalogSearch"
        type="text"
        placeholder="Поиск товаров"
        aria-label="search"
        className={styles.input}
        autoComplete="off"
        spellCheck="false"
      />
      <button type="button" className={styles.clearBtn} disabled>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21ZM9.42426 8.57574C9.18995 8.34142 8.81005 8.34142 8.57574 8.57574C8.34142 8.81005 8.34142 9.18995 8.57574 9.42426L11.1515 12L8.57574 14.5757C8.34142 14.8101 8.34142 15.1899 8.57574 15.4243C8.81005 15.6586 9.18995 15.6586 9.42426 15.4243L12 12.8485L14.5757 15.4243C14.8101 15.6586 15.1899 15.6586 15.4243 15.4243C15.6586 15.1899 15.6586 14.8101 15.4243 14.5757L12.8485 12L15.4243 9.42426C15.6586 9.18995 15.6586 8.81005 15.4243 8.57574C15.1899 8.34142 14.8101 8.34142 14.5757 8.57574L12 11.1515L9.42426 8.57574Z"
            fill="currentColor"
          ></path>
        </svg>
      </button>
    </div>
  );
};
