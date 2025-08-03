import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  gender: "",
  category: "",
  price: [0, 100000],
};

const filterSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setGender(state, action) {
      state.gender = action.payload;
    },
    setCategory(state, action) {
      state.category = action.payload;
    },
    setPrice(state, action) {
      state.price = action.payload;
    },
    clearFilters() {
      return initialState;
    },
  },
});

export const { setGender, setCategory, setPrice, clearFilters } =
  filterSlice.actions;
export default filterSlice.reducer;
