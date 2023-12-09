// store.js
import { configureStore } from "@reduxjs/toolkit";

const rootReducer = (state, action) => {
  // Define your root reducer here
  // For example, you can use combineReducers from Redux Toolkit
  return state;
};

const store = configureStore({
  reducer: rootReducer,
  // Add any middleware or other configurations here
});

export default store;
