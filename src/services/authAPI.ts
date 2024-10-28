import axiosInstance from './api-client';

export const authAPI = {
  register(body: { email: string; phone: string; password: string }) {
    return axiosInstance.post('/auth/register', {
      data: body,
    });
  },
};
