import React, { useState } from 'react';
import styles from './LoginForm.module.css';
import { Input, LoadingButton } from '@/components';
import ErrorInfoIcon from '@icons/errorInfo.svg';
import EyeCrossedIcon from '@icons/eyeCrossedIcon.svg';
import EyeIcon from '@icons/eyeIcon.svg';
import { signIn } from 'next-auth/react';
import toast from 'react-hot-toast';

type LoginFormProps = {
  onRegisterButtonClick: () => void;
  onResetButtonClick: () => void;
  onClose: () => void;
};

export const LoginForm: React.FC<LoginFormProps> = ({
  onRegisterButtonClick,
  onResetButtonClick,
  onClose,
}) => {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
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

  const onPasswordChange = (value: string) => {
    setPassword(value);
    if (!value) {
      setPasswordError('Пароль не указан');
    } else {
      setPasswordError('');
    }
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
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

    try {
      setIsLoading(true);
      const res = await signIn('credentials', {
        email,
        password,
        redirect: false,
      });

      if (!res?.ok) {
        throw Error();
      }

      onClose();
      toast.success('Добро пожаловать!');
    } catch (error) {
      toast.error('Аккаунт не верифицирован, либо неверны пароль и логин');
    }

    setIsLoading(false);
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
        <LoadingButton
          isLoading={isLoading}
          type="submit"
          className={styles.submitButton}
        >
          Войти
        </LoadingButton>
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
