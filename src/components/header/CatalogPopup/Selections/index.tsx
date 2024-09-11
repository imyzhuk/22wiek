import React from 'react';
import styles from './Selections.module.css';
import { Selection } from './Selection';

type SelectionsProps = {
  items: {
    id: number;
    name: string;
    link: string;
    image: string;
  }[];
};

export const Selections: React.FC<SelectionsProps> = ({ items }) => {
  if (!items) return null;
  return (
    <div className={styles.selectionsContainer}>
      <div className={styles.heading}>Подборки</div>
      <ul>
        {items.map((selection) => (
          <Selection
            key={selection.id}
            link={selection.link}
            image={selection.image}
            name={selection.name}
          />
        ))}
      </ul>
    </div>
  );
};
