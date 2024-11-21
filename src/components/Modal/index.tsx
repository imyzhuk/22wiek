'use client';
import React, { useEffect, useRef, useState } from 'react';
import styles from './Modal.module.css';
import CrossExitIcon from '@icons/crossExitTransparent.svg';
import BackArrowIcon from '@icons/backArrowIcon.svg';

type ModalProps = {
  children: React.ReactNode;
  isVisible: boolean;
  closeModal: () => void;
  onBackButtonClick?: () => void;
};

export const Modal: React.FC<ModalProps> = ({
  children,
  isVisible,
  closeModal,
  onBackButtonClick,
}) => {
  const [isVisibilityChanged, setIsVisibilityChanged] = useState(false);

  const valueRef = useRef(isVisible);
  useEffect(() => {
    if (isVisibilityChanged) {
      return;
    }
    if (valueRef.current !== isVisible) {
      valueRef.current = isVisible;
      setIsVisibilityChanged(true);
    }
  }, [isVisible]);

  const handleModalClick = (event: React.MouseEvent<HTMLElement>) => {
    event.stopPropagation();
  };

  return (
    <div
      className={`${isVisible && 'visibleModal'} ${styles.overlay} ${!isVisibilityChanged ? '' : isVisible ? styles.shown : styles.hidden}`}
      onClick={closeModal}
    >
      <div className={styles.modal} onClick={handleModalClick}>
        <div className={styles.navbar}>
          {onBackButtonClick && (
            <button className={styles.backButton} onClick={onBackButtonClick}>
              <BackArrowIcon />
              <span>Назад</span>
            </button>
          )}
          <button onClick={closeModal} className={styles.closeButton}>
            <CrossExitIcon />
          </button>
        </div>
        <div className={styles.content}>{children}</div>
      </div>
    </div>
  );
};
