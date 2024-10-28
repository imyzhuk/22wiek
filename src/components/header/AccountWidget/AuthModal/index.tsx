import React, { useState } from 'react';
import styles from './AuthModal.module.css';
import { Modal } from '@/components';
import { LoginForm } from '../LoginForm';
import { RegistrationForm } from '../RegistrationForm';
import { ResetPasswordForm } from '../ResetPasswordForm';

type AuthModalProps = {
  closeModal: () => void;
};

export const AuthModal: React.FC<AuthModalProps> = ({ closeModal }) => {
  const [currentFormName, setCurrentFormName] = useState<
    'login' | 'register' | 'reset'
  >('login');
  return (
    <Modal
      closeModal={closeModal}
      onBackButtonClick={
        currentFormName === 'login'
          ? undefined
          : () => setCurrentFormName('login')
      }
    >
      {currentFormName === 'login' && (
        <LoginForm
          onClose={closeModal}
          onRegisterButtonClick={() => setCurrentFormName('register')}
          onResetButtonClick={() => setCurrentFormName('reset')}
        />
      )}
      {currentFormName === 'register' && (
        <RegistrationForm onClose={closeModal} />
      )}
      {currentFormName === 'reset' && <ResetPasswordForm />}
    </Modal>
  );
};
