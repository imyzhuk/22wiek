import React from 'react';
import styles from './AdvantagesSection.module.css';
import { advantages } from '@/data/advantages';
import { AdvantageCard } from './AdvantageCard';

type AdvantagesSectionProps = {};

export const AdvantagesSection: React.FC<AdvantagesSectionProps> = () => {
  return (
    <section className={styles.section}>
      <header className={styles.header}>
        <h5 className={styles.title}>Преимущества</h5>
      </header>
      <ul className={styles.cards}>
        {advantages.map((adv) => (
          <AdvantageCard
            key={adv.id}
            desc={adv.desc}
            link={adv.link}
            title={adv.title}
            img={adv.img}
            color={adv.color}
            bgImg={adv.bgImg}
          />
        ))}
      </ul>
    </section>
  );
};
