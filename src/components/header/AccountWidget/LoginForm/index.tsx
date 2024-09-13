import React, { useState } from 'react';
import styles from './LoginForm.module.css';
import { Input } from '@/components';
import ErrorInfoIcon from '@Images/errorInfo.svg';
import EyeCrossedIcon from '@Images/eyeCrossedIcon.svg';
import EyeIcon from '@Images/eyeIcon.svg';

type LoginFormProps = {
  onRegisterButtonClick: () => void;
  onResetButtonClick: () => void;
};

export const LoginForm: React.FC<LoginFormProps> = ({
  onRegisterButtonClick,
  onResetButtonClick,
}) => {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

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

  const onPasswordChange = (value: string) => {
    setPassword(value);
    if (!value) {
      setPasswordError('Пароль не указан');
    } else {
      setPasswordError('');
    }
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email) {
      onEmailChange(email);
      return;
    }
    if (!password) {
      onPasswordChange(password);
      return;
    }

    if (emailError || passwordError) {
      return;
    }

    console.log(email, password);
  };

  return (
    <form className={styles.form} onSubmit={onSubmit} noValidate>
      <h5 className={styles.title}>Вход</h5>
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
        <div className={styles.triggerContainer}>
          <Input
            type={isPasswordVisible ? 'text' : 'password'}
            name="password"
            label="Пароль"
            value={password}
            onChange={onPasswordChange}
            hasError={Boolean(passwordError)}
          />
          {passwordError && (
            <span className={styles.errorMessage}>
              <ErrorInfoIcon className={styles.errorIcon} />
              {passwordError}
            </span>
          )}
          <button
            type="button"
            onClick={onResetButtonClick}
            className={styles.forgotPassword}
          >
            Забыли пароль
          </button>
          <button
            type="button"
            className={styles.togglePasswordButton}
            onClick={() => setIsPasswordVisible(!isPasswordVisible)}
          >
            {isPasswordVisible ? <EyeCrossedIcon /> : <EyeIcon />}
          </button>
        </div>
        <button type="submit" className={styles.submitButton}>
          Войти
        </button>
        <button
          type="button"
          className={styles.registerButton}
          onClick={onRegisterButtonClick}
        >
          Регистрация
        </button>
      </div>
    </form>
  );
};
