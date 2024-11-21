import React, { useEffect, useState } from 'react';
import styles from './PhoneInput.module.css';
import { Input } from '@/components';
import BelarusianFlagIcon from '@icons/belarusianFlagIcon.svg';
import RussianFlagIcon from '@icons/russianFlagIcon.svg';
import CheckmarkIcon from '@icons/checkmark.svg';
import { useOutsideClick } from '@/hooks';
import { useMask } from '@react-input/mask';

const countryCodes = [
  { name: 'Беларусь', code: '+375', mask: '+375 (__) ___-__-__' },
  { name: 'Россия', code: '+7', mask: '+7 (___) ___-__-__' },
];

const chooseMaskByCode = (code: string) => {
  switch (code) {
    case countryCodes[0].code:
      return countryCodes[0].mask;
    case countryCodes[1].code:
      return countryCodes[1].mask;
  }
};

type PhoneInputProps = {
  onPhoneNumberChange: (value: string) => void;
  value: string;
  getMask: (value: string) => void;
};

export const PhoneInput: React.FC<PhoneInputProps> = ({
  onPhoneNumberChange,
  value,
  getMask,
}) => {
  const [selectedCountry, setSelectedCountry] = useState(countryCodes[0]);
  const { ref, isActive, setIsActive } =
    useOutsideClick<HTMLUListElement>(false);
  const inputRef = useMask({
    mask: chooseMaskByCode(selectedCountry.code),
    replacement: { _: /\d/ },
    showMask: true,
  });

  useEffect(() => {
    getMask(selectedCountry.mask);
  }, [selectedCountry]);

  const onCountryCodeChange = (selectedCountry: {
    name: string;
    code: string;
    mask: string;
  }) => {
    setSelectedCountry(selectedCountry);
    setIsActive((prev) => !prev);
    onPhoneNumberChange('');
  };

  return (
    <>
      <Input
        inputMode="numeric"
        placeholder={selectedCountry.mask}
        type="tel"
        name="tel"
        label="Номер телефона"
        value={value}
        onChange={onPhoneNumberChange}
        ref={inputRef}
        onFocus={() =>
          !value && onPhoneNumberChange(selectedCountry.mask.split('_')[0])
        }
        onBlur={() =>
          (value === selectedCountry.mask ||
            value === selectedCountry.mask.split('_')[0]) &&
          onPhoneNumberChange('')
        }
      />
      <div className={styles.codesWrapper}>
        <button
          type="button"
          className={`${styles.countryCodeBtn} ${isActive ? styles.countryCodeBtnActive : styles.countryCodeBtnUnactive}`}
          onClick={() => setIsActive((prev) => !prev)}
        >
          {selectedCountry.code === countryCodes[0].code && (
            <BelarusianFlagIcon />
          )}
          {selectedCountry.code === countryCodes[1].code && <RussianFlagIcon />}
        </button>
      </div>
      {isActive && (
        <ul className={styles.codesList} ref={ref}>
          {countryCodes.map((country) => (
            <li
              className={`${styles.codeItem} ${selectedCountry.code === country.code ? styles.codeItemActive : ''}`}
              key={country.code}
            >
              <label
                className={styles.radioLabel}
                onClick={() => onCountryCodeChange(country)}
              >
                <input type="radio" name="countryCode" />
                {country.code === '+375' && <BelarusianFlagIcon />}
                {country.code === '+7' && <RussianFlagIcon />}
                <span>{country.name},</span>
                <span>{country.code}</span>
                {selectedCountry.code === country.code && (
                  <CheckmarkIcon className={styles.checkmarkIcon} />
                )}
              </label>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};
