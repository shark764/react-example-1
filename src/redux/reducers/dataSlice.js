import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categories: [],
  selectedCategory: null,
  products: [],
  searchString: '',
  countries: [],
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
    setCountries: (state, action) => {
      state.countries = action.payload;
    },
    addCountry: (state, action) => {
      state.countries.unshift(action.payload);
    },
    setAssets: (state, action) => {
      state.assets = action.payload;
    },
  },
});

export default dataSlice;
