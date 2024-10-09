import React from 'react';
import styles from './Modal.module.css';
import CrossExitIcon from '@icons/crossExitTransparent.svg';
import BackArrowIcon from '@icons/backArrowIcon.svg';

type ModalProps = {
  children: React.ReactNode;
  closeModal: () => void;
  onBackButtonClick?: () => void;
};

export const Modal: React.FC<ModalProps> = ({
  children,
  closeModal,
  onBackButtonClick,
}) => {
  const handleModalClick = (event: React.MouseEvent<HTMLElement>) => {
    event.stopPropagation();
  };
  return (
    <div className={`overlay ${styles.overlay}`} onClick={closeModal}>
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
