import React, { Suspense } from 'react';
import styles from './NotFoundPage.module.css';
import { Header } from '@/components';
import Link from 'next/link';

type NotFoundPageProps = {};

function NotFoundPage() {
  return (
    <>
      <Suspense>
        <Header />
      </Suspense>
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
        <Link href="/" className={styles.button}>
          Вернуться на главную
        </Link>
      </main>
    </>
  );
}

export default NotFoundPage;
