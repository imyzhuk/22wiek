import { Location } from '@/types/locationModel';
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { locations as initialLocations } from '@/data/locations';

const initialLocation = initialLocations[0];

type InitialStateType = {
  location: Location;
};
const initialState: InitialStateType = {
  location: initialLocation,
};

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    setLocation(state, action: PayloadAction<Location>) {
      state.location = action.payload;
    },
  },
});

export const profileActions = profileSlice.actions;
export const profileReducer = profileSlice.reducer;
