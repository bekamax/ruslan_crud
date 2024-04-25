import { configureStore } from "@reduxjs/toolkit";
import { counterSlice } from "./slices/counter.slice";
import { productsSlice } from "./slices/products.slice";

export const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    products: productsSlice.reducer,
  },
});
