import axiosInstance from './api-client';
import { GetProducersResponseType } from '@/types/producer';

const producerAPI = {
  getProducers() {
    return axiosInstance.get<GetProducersResponseType>('/producer');
  },
};

export default producerAPI;
