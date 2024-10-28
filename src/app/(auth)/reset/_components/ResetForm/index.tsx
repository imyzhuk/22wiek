'use client';
import React, { useEffect, useState } from 'react';
import styles from './ResetForm.module.css';
import { Input } from '@/components';
import ErrorInfoIcon from '@icons/errorInfo.svg';
import EyeCrossedIcon from '@icons/eyeCrossedIcon.svg';
import EyeIcon from '@icons/eyeIcon.svg';
import { authAPI } from '@/services/authAPI';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';
import { LoadingButton } from '@/components/LoadingButton';

type ResetFormProps = {
  userId: string;
};

export const ResetForm: React.FC<ResetFormProps> = ({ userId }) => {
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');
  const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] =
    useState(false);
  const [isFormValid, setIsFormValid] = useState(false);
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!password || passwordError) {
      setIsFormValid(false);
      return;
    }
    if (!confirmPassword || confirmPasswordError) {
      setIsFormValid(false);
      return;
    }

    setIsFormValid(true);
  }, [password, confirmPassword]);

  const onPasswordChange = (value: string) => {
    const pattern = /(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])/gm;
    setPassword(value);
    if (!value) {
      setPasswordError('Пароль не указан');
    } else if (value.length < 8) {
      setPasswordError('Пароль должен не меньше 8 символов');
    } else if (!pattern.test(value)) {
      setPasswordError(
        'Пароль должен содержать латинские буквы разных регистров, числа и специальные символы: !, @, #, $, %, ^, &, *',
      );
    } else {
      setPasswordError('');
    }
  };

  const onConfirmPasswordChange = (value: string) => {
    setConfirmPassword(value);
    if (value !== password) {
      setConfirmPasswordError('Пароли не совпадают');
    } else {
      setConfirmPasswordError('');
    }
  };

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      setIsLoading(true);
      await authAPI.changePassword({
        userId,
        password,
      });
      router.push('/');
      toast.success('Пароль удачно сброшен!');
    } catch (error) {
      toast.error('Произошла ошибка!');
    }
    setIsLoading(false);
  };

  return (
    <div className={styles.wrapper}>
      <form className={styles.form} onSubmit={onSubmit} noValidate>
        <h5 className={styles.title}>Сброс пароля</h5>
        <div>
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
                <span>
                  <ErrorInfoIcon className={styles.errorIcon} />
                </span>
                <span>{passwordError}</span>
              </span>
            )}
            <button
              type="button"
              className={styles.togglePasswordButton}
              onClick={() => setIsPasswordVisible((prev) => !prev)}
            >
              {isPasswordVisible ? <EyeCrossedIcon /> : <EyeIcon />}
            </button>
          </div>
          <div className={styles.triggerContainer}>
            <Input
              type={isConfirmPasswordVisible ? 'text' : 'password'}
              name="confirmPassword"
              label="Повторите пароль"
              value={confirmPassword}
              onChange={onConfirmPasswordChange}
              hasError={Boolean(confirmPasswordError)}
            />
            {confirmPasswordError && (
              <span className={styles.errorMessage}>
                <span>
                  <ErrorInfoIcon className={styles.errorIcon} />
                </span>
                <span>{confirmPasswordError}</span>
              </span>
            )}
            <button
              type="button"
              className={styles.togglePasswordButton}
              onClick={() => setIsConfirmPasswordVisible((prev) => !prev)}
            >
              {isPasswordVisible ? <EyeCrossedIcon /> : <EyeIcon />}
            </button>
          </div>
          <LoadingButton
            type="submit"
            isLoading={isLoading}
            disabled={!isFormValid}
            className={styles.submitButton}
          >
            Поменять пароль
          </LoadingButton>
        </div>
      </form>
    </div>
  );
};
