'use client';
import React, { useState } from 'react';
import styles from './LocalityButton.module.css';
import LocalityIcon from '@icons/localityIcon.svg';
import { Modal } from '@/components/Modal';
import { LocalityModalContent } from './LocalityModalContent';
import { useLocation } from '@/hooks';

type LocalityButtonProps = {};

export const LocalityButton: React.FC<LocalityButtonProps> = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { location } = useLocation();

  return (
    <>
      <button
        type="button"
        className={styles.localityButton}
        onClick={() => setIsOpen(true)}
      >
        <LocalityIcon />
        {location && (
          <span>
            {location.type}. {location.name}
          </span>
        )}
      </button>
      {location && (
        <Modal isVisible={isOpen} closeModal={() => setIsOpen(false)}>
          <LocalityModalContent closeModal={() => setIsOpen(false)} />
        </Modal>
      )}
    </>
  );
};
