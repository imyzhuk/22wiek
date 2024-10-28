import React, { useEffect, useState } from 'react';
import styles from './RegistrationForm.module.css';
import { Input, LoadingButton } from '@/components';
import ErrorInfoIcon from '@icons/errorInfo.svg';
import { PhoneInput } from './PhoneInput';
import { isStringMatched } from '@/utils';
import EyeCrossedIcon from '@icons/eyeCrossedIcon.svg';
import EyeIcon from '@icons/eyeIcon.svg';
import { authAPI } from '@/services/authAPI';
import toast from 'react-hot-toast';

type RegistrationFormProps = {
  onClose: () => void;
};

export const RegistrationForm: React.FC<RegistrationFormProps> = ({
  onClose,
}) => {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [phoneMask, setPhoneMask] = useState('');
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const checkFormValidity = () => {
    if (!email || emailError) {
      return false;
    }

    if (!phoneNumber || !isStringMatched(phoneNumber, phoneMask)) {
      return false;
    }
    if (!password || passwordError) {
      return false;
    }

    return true;
  };

  useEffect(() => {
    setIsFormValid(checkFormValidity());
  }, [email, phoneNumber, password]);

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

  const onPhoneNumberChange = (value: string) => {
    setPhoneNumber(value);
  };

  const getMask = (value: string) => {
    setPhoneMask(value);
  };

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      setIsLoading(true);
      await authAPI.register({
        email: email,
        phone: phoneNumber,
        password: password,
      });
      onClose();
      toast.success(
        'Отлично! Теперь найдите письмо от нас на вашей почте и перейдите по ссылке внутри.',
        {
          duration: 6000,
        },
      );
    } catch (error) {
      toast.error('Произошла ошибка!');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form className={styles.form} onSubmit={onSubmit} noValidate>
      <h5 className={styles.title}>Регистрация</h5>
      <div>
        <div className={styles.triggerContainer}>
          <PhoneInput
            onPhoneNumberChange={onPhoneNumberChange}
            value={phoneNumber}
            getMask={getMask}
          />
        </div>
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
              <span>
                <ErrorInfoIcon className={styles.errorIcon} />
              </span>
              <span>{passwordError}</span>
            </span>
          )}
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
          disabled={!isFormValid}
        >
          Продолжить
        </LoadingButton>
      </div>
    </form>
  );
};
