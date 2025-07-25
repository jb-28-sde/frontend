import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  gender: "",        // "men", "women", ...
  category: "",      // "electronics", "clothing", ...
  price: [0, 100000] // [min, max] – रूपये
};

const filterSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setGender(state, action)   { state.gender = action.payload; },
    setCategory(state, action) { state.category = action.payload; },
    setPrice(state, action)    { state.price   = action.payload; },
    clearFilters()             { return initialState; }
  }
});

export const { setGender, setCategory, setPrice, clearFilters } = filterSlice.actions;
export default filterSlice.reducer;
