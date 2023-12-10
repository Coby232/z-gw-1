import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  clicked:false,
};

export const addToCartSlice = createSlice({
  name: "addToCart",
  initialState: initialState,
  reducers: {
    toggleTab: (state) => {
      state.clicked = !state.clicked;
    },
  },
});

export const {toggleTab} = addToCartSlice.actions;

export default addToCartSlice.reducer;
