import { createSlice } from "@reduxjs/toolkit";
import { getOneProduct, getProducts } from "../actions/products.actions";

const INIT_STATE = {
  products: [],
  oneProduct: null,
  loading: false,
  error: false,
};
export const productsSlice = createSlice({
  name: "products",
  initialState: INIT_STATE,
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(getProducts.rejected, (state) => {
        state.loading = false;
        state.error = true;
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.products = action.payload;
        state.loading = false;
      })
      .addCase(getOneProduct.pending, (state) => {
        state.loading = true;
      })
      .addCase(getOneProduct.rejected, (state) => {
        state.loading = false;
        state.error = true;
      })
      .addCase(getOneProduct.fulfilled, (state, action) => {
        state.oneProduct = action.payload;
        state.loading = false;
      });
  },
});
