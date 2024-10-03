import React from 'react';
import styles from './SitemapBlock.module.css';
import Link from 'next/link';

type SitemapBlockProps = {};

export const SitemapBlock: React.FC<SitemapBlockProps> = () => {
  return (
    <div className={styles.sitemap}>
      <div className={styles.column}>
        <span className={styles.title}>Покупателям</span>
        <Link className={styles.link} href="/services/delivery.html">
          Доставка
        </Link>
        <Link className={styles.link} href="/services/personal_data.html">
          Обработка персональных данных
        </Link>
        <Link className={styles.link} href="/services/cookie_policy.html">
          Обработка файлов cookie
        </Link>
        <Link className={styles.link} href="/services/video_surveillance.html">
          Положение о видеонаблюдении
        </Link>
        <Link className={styles.link} href="/services/order.html">
          Оплата
        </Link>
        <Link className={styles.link} href="/services/self_delivery.html">
          Самовывоз
        </Link>
        <Link className={styles.link} href="/services/insurance.html">
          Страхование
        </Link>
        <Link className={styles.link} href="/services/public_offer.html">
          Договор публичной оферты
        </Link>
        <Link className={styles.link} href="/services/contacts.html">
          Контакты
        </Link>
        <Link className={styles.link} href="/services/reviews.html">
          Отзывы
        </Link>
      </div>
      <div className={styles.column}>
        <span className={styles.title}>Выгодные предложения</span>
        <Link className={styles.link} href="/special_offers/sales.html">
          Уцененные товары
        </Link>
        <Link className={styles.link} href="/special_offers/promo">
          Все акции
        </Link>
        <Link className={styles.link} href="/special_offers/bonus.html">
          Получайте бонусы за покупки
        </Link>
        <Link className={styles.link} href="/special_offers/contacts.html">
          Каналы связи
        </Link>
        <Link className={styles.link} href="/special_offers/partly_pay.html">
          Оплата частями
        </Link>
        <Link
          className={styles.link}
          href="/special_offers/gift_certificate.html"
        >
          Подарочные сертификаты
        </Link>
        <Link className={styles.link} href="/special_offers/presents.html">
          Идеи подарков
        </Link>
        <Link className={styles.link} href="/special_offers/luxury.html">
          Товары премиум-класса
        </Link>
        <Link className={styles.link} href="/special_offers/recommend.html">
          Рекомендуемые товары
        </Link>
      </div>
      <div className={styles.column}>
        <span className={styles.title}>Компания</span>
        <Link className={styles.link} href="/company/trucking.html">
          Транспортные услуги
        </Link>
        <Link className={styles.link} href="/company/news/">
          Новости
        </Link>
        <Link className={styles.link} href="/company/vacancies.html">
          Вакансии
        </Link>
        <Link className={styles.link} href="/company/corporate_clients.html">
          Безналичные продажи
        </Link>
        <Link className={styles.link} href="/company/wholesale.html">
          Оптовые продажи
        </Link>
        <Link className={styles.link} href="/company/partnership.html">
          Партнерская программа
        </Link>
        <Link className={styles.link} href="/company/partnership_most.html">
          Партнерская программа «Мост»
        </Link>
        <Link className={styles.link} href="/company/partnership_zaraz.html">
          Партнерская программа «Зараз»
        </Link>
        <Link className={styles.link} href="/company/suppliers.html">
          Поставщикам
        </Link>
        <Link className={styles.link} href="/company/carriers.html">
          Перевозчикам
        </Link>
        <Link className={styles.link} href="/company/about.html">
          О нас
        </Link>
        <Link className={styles.link} href="/company/mission.html">
          Миссия и ценности
        </Link>
        <Link className={styles.link} href="/company/details.html">
          Реквизиты
        </Link>
      </div>
      <div className={styles.column}>
        <span className={styles.title}>Полезная информация</span>
        <Link className={styles.link} href="/info/repair.html">
          Ремонт техники
        </Link>
        <Link className={styles.link} href="/info/return.html">
          Замена и возврат товара
        </Link>
        <Link className={styles.link} href="/info/extended_warranty.html">
          Программа «Надежная защита»
        </Link>
        <Link className={styles.link} href="/info/nonwarranty_repair.html">
          Негарантийный ремонт
        </Link>
        <Link className={styles.link} href="/info/maintenance.html">
          Дополнительные услуги
        </Link>
        <Link className={styles.link} href="/info/service_centres.html">
          Сервисные центры
        </Link>
        <Link className={styles.link} href="/info/how_to_buy.html">
          Как совершить покупку
        </Link>
        <Link className={styles.link} href="/info/about_promocodes.html">
          Как использовать промокод
        </Link>
        <Link className={styles.link} href="/info/howto/">
          Помощь в выборе
        </Link>
        <Link className={styles.link} href="/info/brands/">
          Производители
        </Link>
        <Link className={styles.link} href="/info/datamark.html">
          Приложение «Электронный ЗНАК»
        </Link>
      </div>
    </div>
  );
};
