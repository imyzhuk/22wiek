import { IProductCard } from '@/types/product';
import axiosInstance from './api-client';
import { ExpandedDiscountType } from '@/types/product';

const productAPI = {
  getPromoProducts(type: ExpandedDiscountType, limit: number) {
    return axiosInstance.get<IProductCard[]>('/product/promo', {
      params: { type, limit },
    });
  },
  getPopularProducts(limit?: number, fromPrice?: number, untilPrice?: number) {
    return axiosInstance.get<IProductCard[]>('/product/popular', {
      params: {
        limit,
        untilPrice,
        fromPrice,
      },
    });
  },
};

export default productAPI;
