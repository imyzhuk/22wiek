import { GetCartInfoResponse } from '@/types/cart';
import axiosInstance from './api-client';

const cartAPI = {
  getInfo(productIds: number[]) {
    return axiosInstance.get<GetCartInfoResponse>('/cart/info', {
      params: {
        productIds: JSON.stringify(productIds),
      },
      paramsSerializer: {
        indexes: true,
      },
    });
  },
  deleteMany(productIds: number[]) {
    return axiosInstance.delete('/cart', {
      params: {
        productIds: JSON.stringify(productIds),
      },
      paramsSerializer: {
        indexes: true,
      },
    });
  },
  addToCart(productId: number) {
    return axiosInstance.post('/cart', {
      data: {
        productId,
      },
    });
  },
  changeQuantity(cartItemId: number, newQuantity: number) {
    return axiosInstance.patch(`/cart/${cartItemId}`, {
      data: {
        quantity: newQuantity,
      },
    });
  },
};

export default cartAPI;
