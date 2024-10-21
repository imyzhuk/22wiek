import { configureStore } from '@reduxjs/toolkit';
import { cartReducer } from './cart/cartSlice';
import { productReducer } from './product/productSlice';

export const makeStore = () => {
  return configureStore({
    reducer: {
      cart: cartReducer,
      product: productReducer,
    },
    devTools: process.env.NODE_ENV !== 'production',
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>;
