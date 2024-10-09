'use client';

import React from 'react';
import styles from './FixedRangeFilter.module.css';
import { useOutsideClick } from '@/hooks';
import { ScrollContainer } from '@/components';
import CheckmarkIcon from '@icons/checkmark.svg';
import ArrowUpIcon from '@icons/arrowUpIcon.svg';
import ArrowDownIcon from '@icons/arrowDownIcon.svg';

type FixedRangeFilterProps = {
  options: number[];
};

export const FixedRangeFilter: React.FC<FixedRangeFilterProps> = ({
  options,
}) => {
  const [fromValue, setFromValue] = React.useState<number>();
  const [untilValue, setUntilValue] = React.useState<number>();
  const {
    ref: fromInputRef,
    isActive: isFromInputActive,
    setIsActive: setIsFromInputActive,
  } = useOutsideClick<HTMLDivElement>(false);
  const {
    ref: untilInputRef,
    isActive: isUntilInputActive,
    setIsActive: setIsUntilInputActive,
  } = useOutsideClick<HTMLDivElement>(false);
  const handleFromChange = (value: number) => {
    if (fromValue === value) {
      setFromValue(undefined);
      return;
    }
    setFromValue(value);
    console.log(value);
  };
  const handleUntilChange = (value: number) => {
    if (untilValue === value) {
      setUntilValue(undefined);
      return;
    }
    setUntilValue(value);
    console.log(value);
  };

  return (
    <div className={styles.inputs}>
      <label className={styles.label}>
        <span className={styles.labelText}>От</span>
        <input
          type="number"
          className={styles.input}
          value={fromValue || ''}
          onChange={() => null}
          onClick={() => setIsFromInputActive((prev) => !prev)}
        />
        <div
          className={styles.arrow}
          onMouseDown={() => setIsFromInputActive((prev) => !prev)}
        >
          {isFromInputActive ? <ArrowUpIcon /> : <ArrowDownIcon />}
        </div>
        {isFromInputActive && (
          <div ref={fromInputRef} className={styles.optionsContainer}>
            <ScrollContainer
              maxHeight="156px"
              thumbWidth="thin"
              thumbColor="lighter"
              hoverColor="light"
            >
              <div className={styles.options}>
                {options.map((option) => (
                  <li
                    className={`${styles.option} ${fromValue === option ? styles.activeOption : ''}`}
                    onClick={() => handleFromChange(option)}
                  >
                    {option}
                    {fromValue === option && <CheckmarkIcon />}
                  </li>
                ))}
              </div>
            </ScrollContainer>
          </div>
        )}
      </label>

      <label className={styles.label}>
        <span className={styles.labelText}>До</span>
        <input
          type="number"
          className={styles.input}
          value={untilValue || ''}
          onChange={() => null}
          onClick={() => setIsUntilInputActive((prev) => !prev)}
        />
        <div
          className={styles.arrow}
          onMouseDown={() => setIsUntilInputActive((prev) => !prev)}
        >
          {isUntilInputActive ? <ArrowUpIcon /> : <ArrowDownIcon />}
        </div>
        {isUntilInputActive && (
          <div ref={untilInputRef} className={styles.optionsContainer}>
            <ScrollContainer
              maxHeight="156px"
              thumbWidth="thin"
              thumbColor="lighter"
              hoverColor="light"
            >
              <div className={styles.options}>
                {options.map((option) => (
                  <li
                    className={`${styles.option} ${untilValue === option ? styles.activeOption : ''}`}
                    onClick={() => handleUntilChange(option)}
                  >
                    {option}
                    {untilValue === option && <CheckmarkIcon />}
                  </li>
                ))}
              </div>
            </ScrollContainer>
          </div>
        )}
      </label>
    </div>
  );
};
