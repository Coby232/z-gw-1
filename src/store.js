// store.js
import { configureStore } from "@reduxjs/toolkit";
import ProfileReducer from "./features/ProfileSlice";
import AddToCartReducer from "./features/addToCartSlice";


const store = configureStore({
  reducer:{
    profile: ProfileReducer,
    addToCart: AddToCartReducer,
  }
});

export default store;
