import React from 'react';
import styles from './SitemapBlock.module.css';

type SitemapBlockProps = {};

export const SitemapBlock: React.FC<SitemapBlockProps> = () => {
  return (
    <div className={styles.sitemap}>
      <div className={styles.column}>
        <span className={styles.title}>Покупателям</span>
        <a className={styles.link} href="/services/delivery.html">
          Доставка
        </a>
        <a className={styles.link} href="/services/personal_data.html">
          Обработка персональных данных
        </a>
        <a className={styles.link} href="/services/cookie_policy.html">
          Обработка файлов cookie
        </a>
        <a className={styles.link} href="/services/video_surveillance.html">
          Положение о видеонаблюдении
        </a>
        <a className={styles.link} href="/services/order.html">
          Оплата
        </a>
        <a className={styles.link} href="/services/self_delivery.html">
          Самовывоз
        </a>
        <a className={styles.link} href="/services/insurance.html">
          Страхование
        </a>
        <a className={styles.link} href="/services/public_offer.html">
          Договор публичной оферты
        </a>
        <a className={styles.link} href="/services/contacts.html">
          Контакты
        </a>
        <a className={styles.link} href="/services/reviews.html">
          Отзывы
        </a>
      </div>
      <div className={styles.column}>
        <span className={styles.title}>Выгодные предложения</span>
        <a className={styles.link} href="/special_offers/sales.html">
          Уцененные товары
        </a>
        <a className={styles.link} href="/special_offers/promo">
          Все акции
        </a>
        <a className={styles.link} href="/special_offers/bonus.html">
          Получайте бонусы за покупки
        </a>
        <a className={styles.link} href="/special_offers/contacts.html">
          Каналы связи
        </a>
        <a className={styles.link} href="/special_offers/partly_pay.html">
          Оплата частями
        </a>
        <a className={styles.link} href="/special_offers/gift_certificate.html">
          Подарочные сертификаты
        </a>
        <a className={styles.link} href="/special_offers/presents.html">
          Идеи подарков
        </a>
        <a className={styles.link} href="/special_offers/luxury.html">
          Товары премиум-класса
        </a>
        <a className={styles.link} href="/special_offers/recommend.html">
          Рекомендуемые товары
        </a>
      </div>
      <div className={styles.column}>
        <span className={styles.title}>Компания</span>
        <a className={styles.link} href="/company/trucking.html">
          Транспортные услуги
        </a>
        <a className={styles.link} href="/company/news/">
          Новости
        </a>
        <a className={styles.link} href="/company/vacancies.html">
          Вакансии
        </a>
        <a className={styles.link} href="/company/corporate_clients.html">
          Безналичные продажи
        </a>
        <a className={styles.link} href="/company/wholesale.html">
          Оптовые продажи
        </a>
        <a className={styles.link} href="/company/partnership.html">
          Партнерская программа
        </a>
        <a className={styles.link} href="/company/partnership_most.html">
          Партнерская программа «Мост»
        </a>
        <a className={styles.link} href="/company/partnership_zaraz.html">
          Партнерская программа «Зараз»
        </a>
        <a className={styles.link} href="/company/suppliers.html">
          Поставщикам
        </a>
        <a className={styles.link} href="/company/carriers.html">
          Перевозчикам
        </a>
        <a className={styles.link} href="/company/about.html">
          О нас
        </a>
        <a className={styles.link} href="/company/mission.html">
          Миссия и ценности
        </a>
        <a className={styles.link} href="/company/details.html">
          Реквизиты
        </a>
      </div>
      <div className={styles.column}>
        <span className={styles.title}>Полезная информация</span>
        <a className={styles.link} href="/info/repair.html">
          Ремонт техники
        </a>
        <a className={styles.link} href="/info/return.html">
          Замена и возврат товара
        </a>
        <a className={styles.link} href="/info/extended_warranty.html">
          Программа «Надежная защита»
        </a>
        <a className={styles.link} href="/info/nonwarranty_repair.html">
          Негарантийный ремонт
        </a>
        <a className={styles.link} href="/info/maintenance.html">
          Дополнительные услуги
        </a>
        <a className={styles.link} href="/info/service_centres.html">
          Сервисные центры
        </a>
        <a className={styles.link} href="/info/how_to_buy.html">
          Как совершить покупку
        </a>
        <a className={styles.link} href="/info/about_promocodes.html">
          Как использовать промокод
        </a>
        <a className={styles.link} href="/info/howto/">
          Помощь в выборе
        </a>
        <a className={styles.link} href="/info/brands/">
          Производители
        </a>
        <a className={styles.link} href="/info/datamark.html">
          Приложение «Электронный ЗНАК»
        </a>
      </div>
    </div>
  );
};
