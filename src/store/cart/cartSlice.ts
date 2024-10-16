import { CartItemWithProduct, GetCartInfoResponse } from '@/types/cart';
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

type InitialStateType = {
  productIds: number[];
  cartItems: CartItemWithProduct[];
  cartItemsCount: number;
  finishedPrice: number;
  totalPrice: number;
  discount: number;
  chosenProductsCount: number;
};
const initialState: InitialStateType = {
  productIds: [],
  cartItems: [],
  cartItemsCount: 0,
  finishedPrice: 0,
  totalPrice: 0,
  discount: 0,
  chosenProductsCount: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    setCartProductIds(
      state,
      action: PayloadAction<{ productIds: number[]; count: number }>,
    ) {
      return {
        ...state,
        productIds: action.payload.productIds,
        cartItemsCount: action.payload.count,
      };
    },
    removeCartProductIds(state, action: PayloadAction<number[]>) {
      const set = new Set(action.payload);
      return {
        ...state,
        productIds: state.productIds.filter((id) => !set.has(id)),
      };
    },
    setCartItems(
      state,
      action: PayloadAction<{ cartItems: CartItemWithProduct[] }>,
    ) {
      return {
        ...state,
        cartItems: action.payload.cartItems,
      };
    },
    setCartInfo(state, action: PayloadAction<GetCartInfoResponse>) {
      const { discount, finishedPrice, totalPrice, totalProductsCount } =
        action.payload;
      return {
        ...state,
        discount,
        finishedPrice,
        totalPrice,
        chosenProductsCount: totalProductsCount,
      };
    },
    setCartItemsCount(state, action: PayloadAction<{ newQuantity: number }>) {
      return {
        ...state,
        cartItemsCount: action.payload.newQuantity,
      };
    },
  },
});

export const cartActions = cartSlice.actions;
export const cartReducer = cartSlice.reducer;
