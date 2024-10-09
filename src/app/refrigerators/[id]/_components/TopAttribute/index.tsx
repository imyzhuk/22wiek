import React from 'react';
import styles from './TopAttribute.module.css';

type TopAttributeProps = {
  name: string;
  value: string | number | boolean;
};

export const TopAttribute: React.FC<TopAttributeProps> = ({ name, value }) => {
  if (typeof value === 'boolean') {
    value = value ? 'да' : 'нет';
  }

  return (
    <dl className={styles.attribute}>
      <dt className={styles.title}>{name}</dt>
      <dd className={styles.value}>{value}</dd>
    </dl>
  );
};
