import React from 'react';
import styles from './MoreItemsDropdown.module.css';
import { useOutsideClick } from '@/hooks';

type MoreItemsDropdownProps = {
  children: React.ReactNode;
};

export const MoreItemsDropdown: React.FC<MoreItemsDropdownProps> = ({
  children,
}) => {
  const { ref, isActive, setIsActive } =
    useOutsideClick<HTMLUListElement>(false);
  return (
    <div className={styles.wrapper}>
      <button
        type="button"
        className={`${styles.button} ${isActive ? styles.activeButton : styles.unactiveButton}`}
        onClick={() => setIsActive(!isActive)}
      >
        Еще
      </button>
      {isActive && (
        <ul ref={ref} className={styles.list}>
          {children}
        </ul>
      )}
    </div>
  );
};
