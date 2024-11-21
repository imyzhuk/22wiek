'use client';
import React from 'react';
import styles from './FiltersWrapper.module.css';
import { useMediaQuery } from '@/hooks';
import { FiltersButtons, Modal } from '@/components';

type FiltersWrapperProps = {
  children: React.ReactNode;
};

export const FiltersWrapper: React.FC<FiltersWrapperProps> = ({ children }) => {
  const isTablet = useMediaQuery({ maxWidth: 992 });
  const [isVisible, setIsVisible] = React.useState(false);
  return isTablet ? (
    <>
      <FiltersButtons onFiltersButtonClick={() => setIsVisible(true)} />
      <Modal isVisible={isVisible} closeModal={() => setIsVisible(false)}>
        {children}
      </Modal>
    </>
  ) : (
    <div className={styles.wrapper}>{children}</div>
  );
};
