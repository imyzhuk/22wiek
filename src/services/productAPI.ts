import { IProductCard } from '@/types/product';
import axiosInstance from './api-client';
import { ExpandedDiscountType } from '@/types/product';
import { AxiosResponse } from 'axios';

const productAPI = {
  getPromoProducts(
    type: ExpandedDiscountType,
    limit: number,
  ): Promise<AxiosResponse<IProductCard[]>> {
    return axiosInstance.get('/product/promo', { params: { type, limit } });
  },
};

export default productAPI;
