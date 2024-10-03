'use client';

import React from 'react';
import styles from './Popover.module.css';
import { useOutsideClick } from '@/hooks';
import InfoIcon from '@Images/infoIcon.svg';
import CrossExitTransparent from '@Images/crossExitTransparent.svg';
import { ScrollContainer } from '@/components';

type PopoverProps = {
  title: string;
  body: React.ReactNode;
};

export const Popover: React.FC<PopoverProps> = ({ title, body }) => {
  const { ref, isActive, setIsActive } = useOutsideClick<HTMLDivElement>(false);
  return (
    <div className={styles.container}>
      <span
        onClick={() => setIsActive((prev) => !prev)}
        className={styles.infoIcon}
      >
        <InfoIcon />
      </span>
      {isActive && (
        <div ref={ref} className={styles.popover}>
          <span
            onClick={() => {
              setIsActive((prev) => !prev);
            }}
            className={styles.crossIcon}
          >
            <CrossExitTransparent />
          </span>
          <h6 className={styles.title}>{title}</h6>
          <ScrollContainer
            maxHeight="194px"
            thumbWidth="thin"
            thumbColor="lighter"
            hoverColor="light"
          >
            <div className={styles.body}>{body}</div>
          </ScrollContainer>
        </div>
      )}
    </div>
  );
};