import React from 'react';
import styles from './Modal.module.css';

type ModalProps = {
  children: React.ReactNode;
  closeModal: () => void;
  onBackButtonClick?: () => void;
};

export const Modal: React.FC<ModalProps> = ({ children, closeModal }) => {
  const handleModalClick = (event: React.MouseEvent<HTMLElement>) => {
    event.stopPropagation();
  };
  return (
    <div className={`overlay ${styles.overlay}`} onClick={closeModal}>
      <div className={styles.modal} onClick={handleModalClick}>
        <div className={styles.content}>{children}</div>
      </div>
    </div>
  );
};
