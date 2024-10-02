import React from 'react';
import styles from './FilterItem.module.css';

type FilterItemProps = {
  children?: React.ReactNode;
  title: string;
  hasBottomBorder?: boolean;
  popover?: React.ReactNode;
};
export const FilterItem: React.FC<FilterItemProps> = ({
  children,
  title,
  hasBottomBorder,
  popover,
}) => {
  return (
    <div
      className={`${styles.wrapper} ${hasBottomBorder ? styles.hasBottomBorder : ''}`}
    >
      <div className={styles.title}>
        {title} {popover}
      </div>
      {children}
    </div>
  );
};
