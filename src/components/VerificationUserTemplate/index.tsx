import React from 'react';
import styles from './VerificationUserTemplate.module.css';

type VerificationUserTemplateProps = {
  code: string;
};

export const VerificationUserTemplate: React.FC<
  VerificationUserTemplateProps
> = ({ code }) => {
  return (
    <div>
      <p>
        Код подтверждения: <h2>{code}</h2>
      </p>

      <p>
        <a href={`http://localhost:3000/api/auth/verify?code=${code}`}>
          Подтвердить регистрацию
        </a>
      </p>
    </div>
  );
};
