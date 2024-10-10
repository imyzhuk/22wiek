import { ProductWithProducer } from '@/types/product';
import axiosInstance from './api-client';
import { ExpandedDiscountType } from '@/types/product';
import { AxiosResponse } from 'axios';

const productAPI = {
  getPromoProducts(
    type: ExpandedDiscountType,
    limit: number,
  ): Promise<AxiosResponse<ProductWithProducer[]>> {
    return axiosInstance.get('/product/promo', { params: { type, limit } });
  },
};

export default productAPI;
