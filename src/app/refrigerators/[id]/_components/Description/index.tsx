import React from 'react';
import styles from './Description.module.css';

type DescriptionProps = {
  text: string;
};

export const Description: React.FC<DescriptionProps> = ({ text }) => {
  const paragraphs = text.split('\n');

  return (
    <div className={styles.container}>
      {paragraphs.map((paragraph, index) => (
        <p
          key={index}
          className={styles.text}
          dangerouslySetInnerHTML={{ __html: paragraph }}
        ></p>
      ))}
    </div>
  );
};
