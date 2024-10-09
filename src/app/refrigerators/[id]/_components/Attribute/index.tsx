import React from 'react';
import styles from './Attribute.module.css';

type AttributeProps = {
  name: string;
  value: string | number | boolean;
  link?: string;
  popover?: React.ReactNode;
};

export const Attribute: React.FC<AttributeProps> = ({
  name,
  value,
  link,
  popover,
}) => {
  if (typeof value === 'boolean') {
    value = value ? 'да' : 'нет';
  }
  return (
    <div className={styles.wrapper}>
      {popover || <div className={styles.popoverThumb}></div>}
      <dl className={styles.attribute}>
        <dt className={styles.title}>
          <span className={styles.dotText}>{name}</span>
        </dt>
        <dd className={styles.value}>
          {link ? (
            <a className={styles.link} href={link} target="_blank">
              {value}
            </a>
          ) : (
            value
          )}
        </dd>
      </dl>
    </div>
  );
};
