'use client';
import React, { useState } from 'react';
import styles from './Tabs.module.css';

type TabsProps = {
  items: string[];
  onChange: (tabName: string) => void;
};

export const Tabs: React.FC<TabsProps> = ({ items, onChange }) => {
  const [tabName, setTabName] = useState(items[0]);

  const handleChange = (tabName: string) => {
    onChange(tabName);
    setTabName(tabName);
  };
  return (
    <div className={styles.tabs}>
      {items.map((item) => (
        <button
          key={item}
          className={`${styles.tab} ${tabName === item ? styles.tabActive : ''}`}
          onClick={() => handleChange(item)}
        >
          <span className={styles.tabBody}>
            <span className={styles.tabTitle}>{item}</span>
          </span>
        </button>
      ))}
    </div>
  );
};
