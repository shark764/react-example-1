import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categories: [],
  selectedCategory: null,
  products: [],
};

const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    setCategories: (state, action) => {
      state.categories = action.payload;
    },
    setSelectedCategory: (state, action) => {
      state.selectedCategory = action.payload;
    },
    setProducts: (state, action) => {
      state.products = action.payload;
    },
  },
});

export default dataSlice;
