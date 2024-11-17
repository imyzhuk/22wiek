import React from 'react';
import styles from './Disclaimer.module.css';

type DisclaimerProps = {};

export const Disclaimer: React.FC<DisclaimerProps> = () => {
  return (
    <p className={styles.disclaimer}>
      Производители оставляют за собой право изменять внешний вид,
      характеристики и комплектацию товара, предварительно не уведомляя
      продавцов и потребителей. Просим вас отнестись с пониманием к данному
      факту и заранее приносим извинения за возможные неточности в описании и
      фотографиях товара. Будем благодарны вам за{' '}
      <button className={styles.disclaimerButton}>сообщение об ошибках</button>{' '}
      — это поможет сделать наш каталог еще точнее!
    </p>
  );
};
