import React, { useState } from 'react';
import styles from './ResetPasswordForm.module.css';
import { Input } from '@/components';
import ErrorInfoIcon from '@Images/errorInfo.svg';
import EyeCrossedIcon from '@Images/eyeCrossedIcon.svg';
import EyeIcon from '@Images/eyeIcon.svg';

type ResetPasswordFormProps = {};

export const ResetPasswordForm: React.FC<ResetPasswordFormProps> = () => {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');

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

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email || emailError) {
      return;
    }

    console.log(email);
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
        <button type="submit" className={styles.submitButton}>
          Отправить
        </button>
      </div>
    </form>
  );
};
