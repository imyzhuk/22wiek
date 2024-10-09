import React from 'react';
import styles from './EmptySection.module.css';
import NoCertsIcon from '@icons/noCertsIcon.svg';
import Link from 'next/link';

type EmptySectionProps = {};

export const EmptySection: React.FC<EmptySectionProps> = () => {
  return (
    <div className={styles.container}>
      <NoCertsIcon className={styles.icon} />
      <p className={styles.description}>
        У вас пока нет ни одного сертификата, вы можете выбрать их{' '}
        <Link href="/electronic_gift_certificates" className={styles.link}>
          здесь
        </Link>
      </p>
    </div>
  );
};
