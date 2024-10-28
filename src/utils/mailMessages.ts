export const generateCodeMessage = (code: string) =>
  `<div>
    <p>
        <a href='http://localhost:3000/api/auth/verify?code=${code}'>Подтвердить регистрацию</a>
    </p>
</div>
`;

export const generateResetPasswordMessage = (code: string) =>
  `<div>
    <p>
        <a href='http://localhost:3000/reset?code=${code}'>Сбросить пароль</a>
    </p>
</div>
`;
