import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  language: 'en',
};

const configurationSlice = createSlice({
  name: 'configuration',
  initialState,
  reducers: {
    setLang: (state, action) => {
      state.language = action.payload;
    },
  },
});

export default configurationSlice;
