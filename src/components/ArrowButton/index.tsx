import React from 'react';
import styles from './ArrowButton.module.css';

type ArrowButtonProps = {
  direction: 'left' | 'right';
  isActive: boolean;
  onClick?: any;
};

// Before put ArrowButton component in a parent component
// you must point that the parent element has position: relative;
export const ArrowButton: React.FC<ArrowButtonProps> = ({
  direction,
  isActive,
  onClick,
}) => {
  return (
    <button
      className={`${styles.button} ${isActive ? styles.active : ''} ${direction == 'left' ? styles.left : styles.right} `}
      disabled={!isActive}
      onClick={onClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="24"
        height="24"
        fill="none"
      >
        <path
          xmlns="http://www.w3.org/2000/svg"
          d={direction === 'left' ? 'M15 6L9 12L15 18' : 'M9 6L15 12L9 18'}
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinejoin="round"
        ></path>
      </svg>
    </button>
  );
};
