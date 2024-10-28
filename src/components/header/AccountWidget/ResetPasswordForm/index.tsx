import React, { useState } from 'react';
import styles from './ResetPasswordForm.module.css';
import { Input } from '@/components';
import ErrorInfoIcon from '@icons/errorInfo.svg';
import { authAPI } from '@/services/authAPI';
import { LoadingButton } from '@/components/LoadingButton';
import toast from 'react-hot-toast';

type ResetPasswordFormProps = {};

export const ResetPasswordForm: React.FC<ResetPasswordFormProps> = () => {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const onEmailChange = (value: string) => {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    setEmail(value);
    if (!value) {
      setEmailError('Электронная почта не указана');
    } else if (!emailPattern.test(value)) {
      setEmailError('Неправильный формат электронной почты');
    } else {
      setEmailError('');
    }
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email || emailError) {
      return;
    }

    try {
      setIsLoading(true);
      await authAPI.startPasswordReseting({ email });

      toast.success(
        'Отлично! Теперь найдите письмо от нас на вашей почте и перейдите по ссылке внутри.',
        {
          duration: 6000,
        },
      );
    } catch (error) {
      toast.error('Произошла ошибка!');
    }

    setIsLoading(false);
  };

  return (
    <form className={styles.form} onSubmit={onSubmit} noValidate>
      <h5 className={styles.title}>Сброс пароля</h5>
      <div>
        <div className={styles.triggerContainer}>
          <Input
            type="email"
            name="email"
            label="Электронная почта"
            value={email}
            onChange={onEmailChange}
            hasError={Boolean(emailError)}
          />
          {emailError && (
            <span className={styles.errorMessage}>
              <ErrorInfoIcon className={styles.errorIcon} />
              {emailError}
            </span>
          )}
        </div>
        <LoadingButton
          isLoading={isLoading}
          type="submit"
          className={styles.submitButton}
        >
          Отправить
        </LoadingButton>
      </div>
    </form>
  );
};
