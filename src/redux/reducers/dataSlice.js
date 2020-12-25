import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categories: [],
  selectedCategory: null,
  products: [],
  searchString: '',
  records: [],
  assets: [],
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
    setSearchString: (state, action) => {
      state.searchString = action.payload;
    },
    setRecords: (state, action) => {
      state.records = action.payload;
    },
    addRecord: (state, action) => {
      state.records.unshift(action.payload);
    },
    setAssets: (state, action) => {
      state.assets = action.payload;
    },
  },
});

export default dataSlice;
