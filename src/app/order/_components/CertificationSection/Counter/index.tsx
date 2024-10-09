import React from 'react';
import MinusIcon from '@Images/minusIcon.svg';
import PlusIcon from '@Images/plusIcon.svg';
import styles from './Counter.module.css';

type CounterProps = {
  value: number;
};

export const Counter: React.FC<CounterProps> = ({ value }) => {
  const [count, setCount] = React.useState(value);

  const handleCount = (count: number) => {
    if (count < 1) {
      count = 1;
    } else if (count > 999) {
      count = 999;
    }

    setCount(count);
  };

  return (
    <div className={styles.counter}>
      <button
        className={styles.button}
        disabled={count === 1}
        onClick={() => handleCount(count - 1)}
      >
        <MinusIcon />
      </button>
      <input
        min={1}
        max={999}
        type="number"
        value={count}
        onChange={(e) => handleCount(Number(e.target.value))}
        className={styles.input}
      />
      <button
        className={styles.button}
        disabled={count === 999}
        onClick={() => handleCount(count + 1)}
      >
        <PlusIcon />
      </button>
    </div>
  );
};
