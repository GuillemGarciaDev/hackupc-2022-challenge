import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loading: false,
  offers: [],
};

export const authSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setOffersData: (state, action) => {
      state.offers = action.payload;
    },
  },
});

export const { setOffersData } = authSlice.actions;

export default authSlice.reducer;
