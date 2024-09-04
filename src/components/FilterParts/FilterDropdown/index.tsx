'use client';

import React, { useCallback, useState } from 'react';
import styles from './FilterDropdown.module.css';

type FilterDropdownProps = {
  activeButtonClassname?: string;
  buttonClassname?: string;
  children: React.ReactNode;
  buttonContent?: React.ReactNode;
  canCloseIfClickInsideMenu?: boolean;
  triggerElement?: React.ReactNode;
};

export const FilterDropdown: React.FC<FilterDropdownProps> = ({
  canCloseIfClickInsideMenu,
  children,
  buttonContent,
  activeButtonClassname,
  buttonClassname,
  triggerElement,
}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const closeDropdown = useCallback((event: MouseEvent) => {
    if (
      event.target instanceof Element &&
      event.target.closest(`.${styles.trigger}`)
    ) {
      return;
    }

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
  const openDropdown = () => {
    setIsDropdownOpen((prev) => {
      if (!prev) {
        document.addEventListener('click', closeDropdown);
        return !prev;
      }
      return prev;
    });
  };

  return (
    <>
      {triggerElement && (
        <div onClick={openDropdown} className={styles.trigger}>
          {triggerElement}
        </div>
      )}
      {buttonContent && (
        <button
          type="button"
          onClick={toggleDropdown}
          className={`${buttonClassname} ${isDropdownOpen ? activeButtonClassname : ''}`}
          aria-expanded={isDropdownOpen}
        >
          {buttonContent}
        </button>
      )}
      <div className={styles.wrapper}>{isDropdownOpen && children}</div>
    </>
  );
};
