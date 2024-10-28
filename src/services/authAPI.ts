import axiosInstance from './api-client';

export const authAPI = {
  register(body: { email: string; phone: string; password: string }) {
    return axiosInstance.post('/auth/register', {
      data: body,
    });
  },
  changePassword({ userId, password }: { userId: string; password: string }) {
    return axiosInstance.patch('/auth/resetPassword', {
      data: {
        userId,
        password,
      },
    });
  },
  startPasswordReseting({ email }: { email: string }) {
    return axiosInstance.post('/auth/resetPassword', {
      data: {
        email,
      },
    });
  },
};
