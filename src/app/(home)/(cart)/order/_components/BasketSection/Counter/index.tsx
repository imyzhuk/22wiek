import React, { useRef, useState } from 'react';
import styles from './Counter.module.css';
import MinusIcon from '@icons/minusIcon.svg';
import PlusIcon from '@icons/plusIcon.svg';
import { useDebounce } from '@/hooks';

type CounterProps = {
  quantity: number;
  onChange: (newQuantity: number) => void;
};

enum Action {
  Increment,
  Decrement,
}

export const Counter: React.FC<CounterProps> = ({ quantity, onChange }) => {
  const [count, setCount] = useState<number>(quantity);
  const hasMount = useRef(false);
  const onChangeCount = (action: Action) => {
    if (action === Action.Increment) {
      setCount((prev) => prev + 1);
      return;
    }
    if (count - 1 < 1) {
      return;
    }

    setCount((prev) => prev - 1);
  };
  useDebounce(
    () => {
      if (hasMount.current) {
        console.log('debug');
        onChange(count);
      } else {
        hasMount.current = true;
      }
    },
    1000,
    [count],
  );
  return (
    <div className={styles.wrapper}>
      <button
        className={styles.button}
        onClick={() => onChangeCount(Action.Decrement)}
      >
        <MinusIcon />
      </button>
      <input
        type="number"
        value={count}
        onChange={() => null}
        className={styles.input}
      />
      <button
        className={styles.button}
        onClick={() => onChangeCount(Action.Increment)}
      >
        <PlusIcon />
      </button>
    </div>
  );
};
