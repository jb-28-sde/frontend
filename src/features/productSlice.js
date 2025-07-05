import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const res = await fetch("https://fakestoreapi.com/products");
    const data = await res.json();
    return data;
  }
);

const initialState = {
  items: [],
  loading: false,
  error: null
};

const productSlice = createSlice({
  name: "products",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchProducts.rejected, (state) => {
        state.loading = false;
        state.error = "Something went wrong";
      });
  },
  reducers: {
    addProduct: () => {},
    deleteProduct: () => {},
    updateProduct: () => {},
  },
});

export const { addProduct, deleteProduct, updateProduct } = productSlice.actions;
export default productSlice.reducer;
