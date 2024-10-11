import { SearchResponse } from '@/types/search';
import axiosInstance from './api-client';

const searchAPI = {
  search(name: string) {
    return axiosInstance.get<SearchResponse>('/search', { params: { name } });
  },
};

export default searchAPI;
