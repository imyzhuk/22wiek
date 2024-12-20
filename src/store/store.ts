import { configureStore } from '@reduxjs/toolkit';
import { cartReducer } from './cart/cartSlice';
import { productReducer } from './product/productSlice';
import { catalogReducer } from './catalog/catalogSlice';
import { profileReducer } from './profile/profileSlice';

export const makeStore = () => {
  return configureStore({
    reducer: {
      cart: cartReducer,
      product: productReducer,
      catalog: catalogReducer,
      profile: profileReducer,
    },
    devTools: process.env.NODE_ENV !== 'production',
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>;
