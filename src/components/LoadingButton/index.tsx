import React from 'react';
import styles from './LoadingButton.module.css';
import SearchLoaderIcon from '@icons/searchLoaderIcon.svg';

type LoadingButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  isLoading: boolean;
  loader?: React.ReactNode;
};

export const LoadingButton: React.FC<LoadingButtonProps> = ({
  children,
  className,
  loader,
  disabled,
  isLoading,
  ...props
}) => {
  return (
    <button
      {...props}
      disabled={disabled}
      className={`${styles.button} ${isLoading ? styles.loadingButton : ''} ${className}`}
    >
      <span className={isLoading ? styles.content : ''}>{children}</span>
      {isLoading && (
        <div className={styles.loader}>
          {loader ?? <SearchLoaderIcon stroke="white" />}
        </div>
      )}
    </button>
  );
};
