import React from 'react';
import styles from './SitemapBlock.module.css';
import span from 'next/link';

type SitemapBlockProps = {};

export const SitemapBlock: React.FC<SitemapBlockProps> = () => {
  return (
    <div className={styles.sitemap}>
      <div className={styles.column}>
        <span className={styles.title}>Покупателям</span>
        <span className={styles.link}>Доставка</span>
        <span className={styles.link}>Обработка персональных данных</span>
        <span className={styles.link}>Обработка файлов cookie</span>
        <span className={styles.link}>Положение о видеонаблюдении</span>
        <span className={styles.link}>Оплата</span>
        <span className={styles.link}>Самовывоз</span>
        <span className={styles.link}>Страхование</span>
        <span className={styles.link}>Договор публичной оферты</span>
        <span className={styles.link}>Контакты</span>
        <span className={styles.link}>Отзывы</span>
      </div>
      <div className={styles.column}>
        <span className={styles.title}>Выгодные предложения</span>
        <span className={styles.link}>Уцененные товары</span>
        <span className={styles.link}>Все акции</span>
        <span className={styles.link}>Получайте бонусы за покупки</span>
        <span className={styles.link}>Каналы связи</span>
        <span className={styles.link}>Оплата частями</span>
        <span className={styles.link}>Подарочные сертификаты</span>
        <span className={styles.link}>Идеи подарков</span>
        <span className={styles.link}>Товары премиум-класса</span>
        <span className={styles.link}>Рекомендуемые товары</span>
      </div>
      <div className={styles.column}>
        <span className={styles.title}>Компания</span>
        <span className={styles.link}>Транспортные услуги</span>
        <span className={styles.link}>Новости</span>
        <span className={styles.link}>Вакансии</span>
        <span className={styles.link}>Безналичные продажи</span>
        <span className={styles.link}>Оптовые продажи</span>
        <span className={styles.link}>Партнерская программа</span>
        <span className={styles.link}>Партнерская программа «Мост»</span>
        <span className={styles.link}>Партнерская программа «Зараз»</span>
        <span className={styles.link}>Поставщикам</span>
        <span className={styles.link}>Перевозчикам</span>
        <span className={styles.link}>О нас</span>
        <span className={styles.link}>Миссия и ценности</span>
        <span className={styles.link}>Реквизиты</span>
      </div>
      <div className={styles.column}>
        <span className={styles.title}>Полезная информация</span>
        <span className={styles.link}>Ремонт техники</span>
        <span className={styles.link}>Замена и возврат товара</span>
        <span className={styles.link}>Программа «Надежная защита»</span>
        <span className={styles.link}>Негарантийный ремонт</span>
        <span className={styles.link}>Дополнительные услуги</span>
        <span className={styles.link}>Сервисные центры</span>
        <span className={styles.link}>Как совершить покупку</span>
        <span className={styles.link}>Как использовать промокод</span>
        <span className={styles.link}>Помощь в выборе</span>
        <span className={styles.link}>Производители</span>
        <span className={styles.link}>Приложение «Электронный ЗНАК»</span>
      </div>
    </div>
  );
};
