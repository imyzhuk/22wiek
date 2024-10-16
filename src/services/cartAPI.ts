import { CartItemWithProduct, GetCartInfoResponse } from '@/types/cart';
import axiosInstance from './api-client';

const cartAPI = {
  getAll() {
    return axiosInstance.get<CartItemWithProduct[]>('/cart');
  },
  getCartProductIds() {
    return axiosInstance.get<{ productIds: number[]; count: number }>(
      '/cart/productIds',
    );
  },
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
    return axiosInstance.delete<{
      quantity: number;
    }>('/cart', {
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
    return axiosInstance.patch<{ newQuantity: number }>(`/cart/${cartItemId}`, {
      data: {
        quantity: newQuantity,
      },
    });
  },
};

export default cartAPI;
