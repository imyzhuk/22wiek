import React from 'react';
import styles from './ScrollContainer.module.css';

type ScrollContainerProps = {
  children: React.ReactNode;
  maxHeight?: string;
};

export const ScrollContainer: React.FC<ScrollContainerProps> = ({
  children,
  maxHeight,
}) => {
  return (
    <div className={styles.container} style={{ maxHeight }}>
      {children}
    </div>
  );
};
