import React, { CSSProperties } from 'react';
import styles from './Labels.module.css';

type LabelsProps = {
  items: {
    id: number;
    name: string;
    style?: CSSProperties;
  }[];
};

export const Labels: React.FC<LabelsProps> = ({ items }) => {
  return (
    <div className={styles.container}>
      {items.map(({ id, name, style }) => (
        <span key={id} className={styles.label} style={style}>
          {name}
        </span>
      ))}
    </div>
  );
};
