import React, { CSSProperties } from 'react';
import styles from './Loader.module.css';

type LoaderProps = {
  color?: CSSProperties['color'];
};

export const Loader: React.FC<LoaderProps> = ({ color = '#07c' }) => {
  return (
    <div className={styles.container}>
      <div className={styles.box} style={{ color }}>
        <div className={styles.rotator}>
          <div className={styles.frameLeft}>
            <div className={styles.circle}></div>
          </div>
          <div className={styles.frameRight}>
            <div className={styles.circle}></div>
          </div>
        </div>
      </div>
    </div>
  );
};
