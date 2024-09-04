import React from 'react';
import styles from './Modal.module.css';
import CrossExitIcon from '../../../public/crossExitTransparent.svg';

type ModalProps = {
  children: React.ReactNode;
  closeModal: () => void;
};

export const Modal: React.FC<ModalProps> = ({ children, closeModal }) => {
  const handleModalClick = (event: React.MouseEvent<HTMLElement>) => {
    event.stopPropagation();
  };
  return (
    <div className={`overlay ${styles.overlay}`} onClick={closeModal}>
      <div className={styles.modal} onClick={handleModalClick}>
        <div className={styles.navbar}>
          <button onClick={closeModal} className={styles.closeButton}>
            <CrossExitIcon />
          </button>
        </div>
        <div className={styles.content}>{children}</div>
      </div>
    </div>
  );
};
