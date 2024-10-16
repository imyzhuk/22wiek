import axiosInstance from './api-client';
import { GetAdditionalUserInfoResponse } from '@/types/user';

const userAPI = {
  getAdditionalInfo() {
    return axiosInstance.get<GetAdditionalUserInfoResponse>('/user/info');
  },
};

export default userAPI;
