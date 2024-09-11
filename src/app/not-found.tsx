'use client';

import React from 'react';
import styles from './NotFoundPage.module.css';
import { useRouter } from 'next/navigation';

type NotFoundPageProps = {};

function NotFoundPage() {
  const router = useRouter();
  return (
    <main className={styles.main}>
      <div className={styles.bubble}></div>
      <div className={styles.bubble}></div>
      <div className={styles.bubble}></div>
      <div className={styles.bubble}></div>
      <div className={styles.bubble}></div>
      <h1 className={styles.title}>Нам жаль</h1>
      <p className={styles.description}>
        Это страница пока не сделана. Мы работаем над ней...
      </p>
      <button
        type="button"
        onClick={() => router.push('/')}
        className={styles.button}
      >
        Вернуться на главную
      </button>
    </main>
  );
}

export default NotFoundPage;
