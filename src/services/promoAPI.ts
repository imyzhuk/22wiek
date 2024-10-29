import { IProductCard } from '@/types/product';
import axiosInstance from './api-client';
import {
  GetRefrigeratorMutableFiltersParamsType,
  GetRefrigeratorMutableFiltersResponseType,
  GetRefrigeratorsParamsType,
} from '@/types/refrigerator';
import qs from 'qs';
import { Producer } from '@prisma/client';
import {
  GetPromotionsFiltersParamsType,
  GetPromotionsFiltersResponseType,
  GetPromotionsParamsType,
  GetPromotionsResponseType,
} from '@/types/promo';

const promoAPI = {
  getProducts(params: Partial<GetPromotionsParamsType>) {
    return axiosInstance.get<GetPromotionsResponseType>('/promo', {
      params,
      paramsSerializer: function (params) {
        return qs.stringify(params, { arrayFormat: 'indices' });
      },
    });
  },
  getFilters(params: Partial<GetPromotionsFiltersParamsType>) {
    return axiosInstance.get<GetPromotionsFiltersResponseType>(
      '/promo/filters',
      {
        params,
        paramsSerializer: function (params) {
          return qs.stringify(params, { arrayFormat: 'indices' });
        },
      },
    );
  },
};

export default promoAPI;
