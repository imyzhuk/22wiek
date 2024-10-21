import React from 'react';
import styles from './Services.module.css';
import { FilterCheckbox } from '@/components';
import MoreIcon from '@icons/moreIcon.svg';
import { formatPrice } from '@/utils';
import { IAdditionalService } from '@/types/cart';

type ServicesProps = {
  items: IAdditionalService[];
};

export const Services: React.FC<ServicesProps> = ({ items }) => {
  return (
    <div className={styles.services}>
      <h4 className={styles.title}>Дополнительные услуги</h4>
      <ul className={styles.list}>
        {items.slice(0, 2).map((service) => {
          const [intPricePart, decimalPricePart] = formatPrice(
            +service.price,
          ).split(',');
          return (
            <li className={styles.item} key={service.id}>
              <div className={styles.info}>
                <div className={styles.topBlock}>
                  <FilterCheckbox
                    name=""
                    value=""
                    className={styles.checkbox}
                  />
                  <span className={styles.itemTitle}>{service.name}</span>
                </div>
                <p className={styles.description}>{service.description}</p>
                <button className={styles.moreButton}>
                  <MoreIcon className={styles.moreIcon} />
                  Подробнее
                </button>
              </div>
              <div className={styles.price}>
                {intPricePart},
                <span className={styles.priceDecimalPart}>
                  {decimalPricePart} р.
                </span>
              </div>
            </li>
          );
        })}
      </ul>
      {items.length > 2 && (
        <div className={styles.bottom}>
          <button className={styles.button}>Все услуги</button>
        </div>
      )}
    </div>
  );
};
