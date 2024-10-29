import { GetCatalogType } from '@/types/catalog';
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

type InitialStateType = {
  categories: GetCatalogType;
};
const initialState: InitialStateType = {
  categories: [],
};

const catalogSlice = createSlice({
  name: 'catalog',
  initialState,
  reducers: {
    setCatalog(state, action: PayloadAction<GetCatalogType>) {
      state.categories = action.payload;
    },
  },
});

export const catalogActions = catalogSlice.actions;
export const catalogReducer = catalogSlice.reducer;
