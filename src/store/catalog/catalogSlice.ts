import { GetCatalogType } from '@/types/catalog';
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

type InitialStateType = {
  catalog: GetCatalogType;
};
const initialState: InitialStateType = {
  catalog: [],
};

const catalogSlice = createSlice({
  name: 'catalog',
  initialState,
  reducers: {
    setCatalog(state, action: PayloadAction<GetCatalogType>) {
      state.catalog = action.payload;
    },
  },
});

export const catalogActions = catalogSlice.actions;
export const catalogReducer = catalogSlice.reducer;
