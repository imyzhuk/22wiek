import React from 'react';
import styles from './ScrollContainer.module.css';

type ScrollContainerProps = {
  children: React.ReactNode;
  maxHeight?: string;
  thumbWidth?: 'thin' | 'medium';
  thumbColor?: 'lighter' | 'light' | 'dark' | 'darker';
  hoverColor?: 'lighter' | 'light' | 'dark' | 'darker';
};

export const ScrollContainer: React.FC<ScrollContainerProps> = ({
  children,
  maxHeight,
  thumbWidth,
  thumbColor,
  hoverColor,
}) => {
  return (
    <div
      className={`${styles.container} ${thumbColor ? styles[thumbColor] : ''} ${hoverColor ? styles[`${hoverColor}Hover`] : ''} ${thumbWidth === 'thin' ? styles.thinThumb : styles.mediumThumb}`}
      style={{ maxHeight }}
    >
      {children}
    </div>
  );
};
