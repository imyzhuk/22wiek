import { IProductCard } from '@/types/product';
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

type InitialStateType = {
  items: IProductCard[];
  count: number;
  page: number;
  isLoading: boolean;
};
const initialState: InitialStateType = {
  items: [],
  count: 0,
  page: 0,
  isLoading: false,
};

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    setProducts(state, action: PayloadAction<IProductCard[]>) {
      state.items = action.payload;
    },
    setProductsCount(state, action: PayloadAction<number>) {
      state.count = action.payload;
    },
    setPage(state, action: PayloadAction<number>) {
      state.page = action.payload;
    },
    setIsProductsLoading(state, action: PayloadAction<boolean>) {
      state.isLoading = action.payload;
    },
  },
});

export const productActions = productSlice.actions;
export const productReducer = productSlice.reducer;
