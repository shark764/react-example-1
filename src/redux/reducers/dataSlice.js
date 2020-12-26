import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categories: [],
  selectedCategory: null,
  products: [],
  searchString: '',
  users: [],
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
    setUsers: (state, action) => {
      state.users = action.payload;
    },
    addUser: (state, action) => {
      state.users.unshift(action.payload);
    },
    setAssets: (state, action) => {
      state.assets = action.payload;
    },
  },
});

export default dataSlice;
