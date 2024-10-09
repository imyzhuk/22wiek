import React, { useEffect, useState } from 'react';
import styles from './RegistrationForm.module.css';
import { Input } from '@/components';
import ErrorInfoIcon from '@icons/errorInfo.svg';
import { PhoneInput } from './PhoneInput';
import { isStringMatched } from '@/utils/isStringMatched';

type RegistrationFormProps = {};

export const RegistrationForm: React.FC<RegistrationFormProps> = ({}) => {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [phoneMask, setPhoneMask] = useState('');
  const [isFormValid, setIsFormValid] = useState(false);

  const checkFormValidity = () => {
    if (!email || emailError) {
      return false;
    }

    if (!phoneNumber || !isStringMatched(phoneNumber, phoneMask)) {
      return false;
    }

    return true;
  };

  useEffect(() => {
    setIsFormValid(checkFormValidity());
  }, [email, phoneNumber]);

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

  const onPhoneNumberChange = (value: string) => {
    setPhoneNumber(value);
  };

  const getMask = (value: string) => {
    setPhoneMask(value);
  };

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(email, phoneNumber);
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

        <button
          type="submit"
          className={styles.submitButton}
          disabled={!isFormValid}
        >
          Продолжить
        </button>
      </div>
    </form>
  );
};
