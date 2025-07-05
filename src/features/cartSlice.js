import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: []
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const product = action.payload;
      const found = state.items.find((p) => p.id === product.id);
      if (found) {
        found.qty += 1;
      } else {
        state.items.push({ ...product, qty: 1 });
      }
    },
    removeFromCart: (state, action) => {
      state.items = state.items.filter((p) => p.id !== action.payload);
    },
    clearCart: (state) => {
      state.items = [];
    }
  }
});

export const addToCart      = cartSlice.actions.addToCart;
export const removeFromCart = cartSlice.actions.removeFromCart;
export const clearCart      = cartSlice.actions.clearCart;

export default cartSlice.reducer;
