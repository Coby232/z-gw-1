import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

export const addToCartSlice = createSlice({
  name: "addToCart",
  initialState: initialState,
  reducers: {
    deposit: (state, action) => {
      state.value += action.payload;
    },
    withdraw: (state, action) => {
      state.value -= action.payload;
    },
  },
});

export const { deposit, withdraw } = addToCartSlice.actions;

export default addToCartSlice.reducer;
