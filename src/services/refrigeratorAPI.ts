import { IProductCard } from '@/types/product';
import axiosInstance from './api-client';

const refrigeratorAPI = {
  getProducts(page: number = 1) {
    return axiosInstance.get<{ products: IProductCard[]; count: number }>(
      '/refrigerator',
      {
        params: {
          page,
        },
      },
    );
  },
};

export default refrigeratorAPI;
