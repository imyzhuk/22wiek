import React from 'react';
import styles from './Services.module.css';
import { Decimal } from '@prisma/client/runtime/library';
import MoreIcon from '@icons/moreIcon.svg';
import AttentionIcon from '@icons/attentionIcon.svg';

type ServicesProps = {
  items: {
    id: number;
    name: string;
    link: string | null;
    price: Decimal;
    description: string;
    priceCurrency: string;
    categoryId: number;
  }[];
};

export const Services: React.FC<ServicesProps> = ({ items }) => {
  return (
    <div className={styles.services}>
      <div className={styles.headline}>
        <h4 className={styles.title}>Дополнительные услуги</h4>
        {items.length > 2 && (
          <button className={styles.titleButton}>
            Смотрите все {items.length} услуги
          </button>
        )}
      </div>
      <ul className={styles.list}>
        {items.slice(0, 2).map((service) => {
          let { format } = new Intl.NumberFormat('ru', {
            minimumFractionDigits: 2,
          });

          const [intPricePart, decimalPricePart] = format(
            Number(service.price),
          ).split(',');
          return (
            <li className={styles.item} key={service.id}>
              <span className={styles.itemTitle}>{service.name}</span>
              <div className={styles.price}>
                {intPricePart},
                <span className={styles.priceDecimalPart}>
                  {decimalPricePart} р.
                </span>
              </div>
              <div className={styles.descriptionWrapper}>
                <p className={styles.description}>{service.description}</p>
                <button className={styles.descriptionButton}>еще</button>
              </div>
              {service.link && (
                <div className={styles.moreDetails}>
                  <a href={service.link} className={styles.moreDetailsLink}>
                    <MoreIcon />
                    Подробнее об услуге
                  </a>
                </div>
              )}
            </li>
          );
        })}
      </ul>
      <div className={styles.info}>
        <AttentionIcon />
        <span className={styles.infoText}>
          Добавить дополнительную услугу вы можете в корзине при оформлении
          заказа.
        </span>
      </div>
    </div>
  );
};
