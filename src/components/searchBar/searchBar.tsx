import React from 'react';
import styles from './searchBar.module.css';

type SearchBarProps = {};

const SearchBar: React.FC<SearchBarProps> = () => {
  return (
    <div className={styles.container}>
      <button type="button" className={styles.searchBtn} disabled>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M16.4406 15.3108C18.392 12.8035 18.2153 9.17663 15.9107 6.87197C13.4147 4.37601 9.36794 4.37601 6.87197 6.87197C4.37601 9.36794 4.37601 13.4147 6.87197 15.9107C9.17662 18.2153 12.8034 18.392 15.3108 16.4406L17.3058 18.5368C17.6152 18.8619 18.1317 18.8683 18.449 18.551C18.7555 18.2445 18.7616 17.7495 18.4628 17.4356L16.4406 15.3108ZM14.7857 14.776C16.6528 12.9036 16.6512 9.87216 14.7808 8.00181C12.9089 6.12984 9.87379 6.12984 8.00181 8.00181C6.12984 9.87379 6.12984 12.9089 8.00181 14.7808C9.87216 16.6512 12.9036 16.6528 14.776 14.7857C14.7776 14.7841 14.7792 14.7825 14.7808 14.7808C14.7825 14.7792 14.7841 14.7776 14.7857 14.776Z"
            fill="currentColor"
          ></path>
        </svg>
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
        <div className="" role="presentation">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21ZM9.42426 8.57574C9.18995 8.34142 8.81005 8.34142 8.57574 8.57574C8.34142 8.81005 8.34142 9.18995 8.57574 9.42426L11.1515 12L8.57574 14.5757C8.34142 14.8101 8.34142 15.1899 8.57574 15.4243C8.81005 15.6586 9.18995 15.6586 9.42426 15.4243L12 12.8485L14.5757 15.4243C14.8101 15.6586 15.1899 15.6586 15.4243 15.4243C15.6586 15.1899 15.6586 14.8101 15.4243 14.5757L12.8485 12L15.4243 9.42426C15.6586 9.18995 15.6586 8.81005 15.4243 8.57574C15.1899 8.34142 14.8101 8.34142 14.5757 8.57574L12 11.1515L9.42426 8.57574Z"
              fill="currentColor"
            ></path>
          </svg>
        </div>
      </button>
    </div>
  );
};

export default SearchBar;
