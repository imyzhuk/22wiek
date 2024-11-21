import React, { useState } from 'react';
import styles from './ProfileModal.module.css';
import { Modal } from '@/components';
import { LoginForm } from '../LoginForm';
import { RegistrationForm } from '../RegistrationForm';
import { ResetPasswordForm } from '../ResetPasswordForm';
import { ProfileScreen } from '../ProfileScreen';
import { LocalityModalContent } from '../LocalityButton/LocalityModalContent';

type ProfileModalProps = {
  isVisible: boolean;
  closeModal: () => void;
};

export const ProfileModal: React.FC<ProfileModalProps> = ({
  closeModal,
  isVisible,
}) => {
  const [currentFormName, setCurrentFormName] = useState<
    'profile' | 'location' | 'login' | 'register' | 'reset'
  >('profile');
  const onClose = () => {
    setCurrentFormName('profile');
    closeModal();
  };
  return (
    <Modal
      isVisible={isVisible}
      closeModal={onClose}
      onBackButtonClick={
        currentFormName === 'profile'
          ? undefined
          : currentFormName === 'login' || currentFormName === 'location'
            ? () => setCurrentFormName('profile')
            : () => setCurrentFormName('login')
      }
    >
      {currentFormName === 'profile' && (
        <ProfileScreen
          onLocationButtonClick={() => setCurrentFormName('location')}
          onLoginButtonClick={() => setCurrentFormName('login')}
        />
      )}
      {currentFormName === 'location' && (
        <LocalityModalContent closeModal={onClose} />
      )}
      {currentFormName === 'login' && (
        <LoginForm
          onClose={onClose}
          onRegisterButtonClick={() => setCurrentFormName('register')}
          onResetButtonClick={() => setCurrentFormName('reset')}
        />
      )}
      {currentFormName === 'register' && <RegistrationForm onClose={onClose} />}
      {currentFormName === 'reset' && <ResetPasswordForm />}
    </Modal>
  );
};
