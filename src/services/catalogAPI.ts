import axiosInstance from './api-client';
import { ExpandedDiscountType } from '@/types/product';
import {
  GetCatalogType,
  GetPopularProductsType,
  GetPromoProductsType,
} from '@/types/catalog';

const catalogAPI = {
  getCatalog() {
    return axiosInstance.get<GetCatalogType>('/catalog');
  },
  getPromoProducts(type: ExpandedDiscountType, limit: number) {
    return axiosInstance.get<GetPromoProductsType>('/catalog/promo', {
      params: { type, limit },
    });
  },
  getPopularProducts(limit?: number, fromPrice?: number, untilPrice?: number) {
    return axiosInstance.get<GetPopularProductsType>('/catalog/popular', {
      params: {
        limit,
        untilPrice,
        fromPrice,
      },
    });
  },
};

export default catalogAPI;
