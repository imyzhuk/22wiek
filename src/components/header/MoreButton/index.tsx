import React, { forwardRef } from 'react';
import styles from './MoreButton.module.css';
import { useOutsideClick } from '@/hooks';

type MoreButtonProps = {
  isActive: boolean;
  onClick: () => void;
};

export const MoreButton = forwardRef<HTMLButtonElement, MoreButtonProps>(
  ({ isActive, onClick }, ref) => {
    return (
      <button
        ref={ref}
        type="button"
        className={`${styles.button} ${isActive ? styles.activeButton : styles.unactiveButton}`}
        onClick={onClick}
      >
        Еще
      </button>
    );
  },
);

/*
{isActive && <ul className={styles.list} ref={ref}>
                <li className={styles.item}><a href="/not-found">Оплата</a></li>
                <li className={styles.item}><a href="/not-found"></a></li>
                <li className={styles.item}><a href="/not-found"></a></li>
            </ul>}
            */
