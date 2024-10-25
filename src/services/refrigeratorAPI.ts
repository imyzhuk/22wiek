import { IProductCard } from '@/types/product';
import axiosInstance from './api-client';
import {
  GetRefrigeratorMutableFiltersParamsType,
  GetRefrigeratorMutableFiltersResponseType,
  GetRefrigeratorsParamsType,
} from '@/types/refrigerator';
import qs from 'qs';
import { Producer } from '@prisma/client';

const refrigeratorAPI = {
  getProducts(params: Partial<GetRefrigeratorsParamsType>) {
    return axiosInstance.get<{ products: IProductCard[]; count: number }>(
      '/refrigerator',
      {
        params,
        paramsSerializer: function (params) {
          return qs.stringify(params, { arrayFormat: 'indices' });
        },
      },
    );
  },
  getMutableFilters(params: Partial<GetRefrigeratorMutableFiltersParamsType>) {
    return axiosInstance.get<GetRefrigeratorMutableFiltersResponseType>(
      '/refrigerator/filters/mutable',
      {
        params,
        paramsSerializer: function (params) {
          return qs.stringify(params, { arrayFormat: 'indices' });
        },
      },
    );
  },
  getImmutableFilters() {
    return axiosInstance.get<Producer[]>('/refrigerator/filters');
  },
};

export default refrigeratorAPI;
