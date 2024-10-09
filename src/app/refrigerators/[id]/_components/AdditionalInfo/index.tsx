import React from 'react';
import styles from './AdditionalInfo.module.css';
import { AdditionalLink } from '@prisma/client';
import FileIcon from '@Images/fileIcon.svg';

type AdditionalInfoProps = {
  items: AdditionalLink[];
};

export const AdditionalInfo: React.FC<AdditionalInfoProps> = ({ items }) => {
  if (items.length === 0) return null;
  const files = items.filter((item) => item.type === 'File');
  const links = items.filter((item) => item.type === 'Link');
  return (
    <div className={styles.container}>
      <div className={styles.title}>Дополнительно</div>
      {files.length > 0 && (
        <ul className={styles.list}>
          {files.map(({ id, name, link }) => (
            <li key={id} className={styles.item}>
              <a
                href={link}
                className={styles.link}
                target="_blank"
                rel="noreferrer"
              >
                <FileIcon />
                {name}
              </a>
            </li>
          ))}
        </ul>
      )}
      {links.length > 0 && (
        <ul className={styles.list}>
          {links.map(({ id, name, link }) => (
            <li key={id} className={styles.item}>
              –
              <a
                href={link}
                className={styles.link}
                target="_blank"
                rel="noreferrer"
              >
                {name}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
