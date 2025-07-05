import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "../features/productSlice";
import filtersReducer from "../features/FilterSlice";
import cartReducer from "../features/cartSlice";

export const store = configureStore({
  reducer: {
    products: productsReducer,
    filters: filtersReducer,
    cart: cartReducer
  }
});
