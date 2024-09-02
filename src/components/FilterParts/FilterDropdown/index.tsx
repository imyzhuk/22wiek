'use client';

import React, { useCallback, useState } from 'react';
import styles from './FilterDropdown.module.css';

type FilterDropdownProps = {
  activeButtonClassname?: string;
  buttonClassname?: string;
  children: React.ReactNode;
  buttonContant: React.ReactNode;
  canCloseIfClickInsideMenu?: boolean;
};

export const FilterDropdown: React.FC<FilterDropdownProps> = ({
  canCloseIfClickInsideMenu,
  children,
  buttonContant,
  activeButtonClassname,
  buttonClassname,
}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const closeDropdown = useCallback((event: MouseEvent) => {
    if (
      canCloseIfClickInsideMenu ||
      !(event.target instanceof Element) ||
      !event.target.closest(`.${styles.wrapper}`)
    ) {
      setIsDropdownOpen(false);
      document.removeEventListener('click', closeDropdown);
    }
  }, []);

  const toggleDropdown = useCallback(
    () =>
      setIsDropdownOpen((prev) => {
        if (prev) {
          document.removeEventListener('click', closeDropdown);
        } else {
          document.addEventListener('click', closeDropdown);
        }
        return !prev;
      }),
    [],
  );

  return (
    <div className={styles.wrapper}>
      <button
        type="button"
        onClick={toggleDropdown}
        className={`${buttonClassname} ${isDropdownOpen ? activeButtonClassname : ''}`}
        aria-expanded={isDropdownOpen}
      >
        {buttonContant}
      </button>
      {isDropdownOpen && children}
    </div>
  );
};
