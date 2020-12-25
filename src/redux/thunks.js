import Axios from 'axios';
import {
  createEntry,
  getAssets,
  getEntries,
} from '../Containers/Contentful/sdk';
import { log } from '../utils';
import dataSlice from './reducers/dataSlice';

const {
  setCategories,
  setSelectedCategory,
  setProducts,
  setRecords,
  setAssets,
  addRecord,
} = dataSlice.actions;

export function getCategories() {
  return async (dispatch) => {
    const { data } = await Axios.get(
      'https://gorest.co.in/public-api/categories'
    );

    const categories = data.data;

    dispatch(setCategories(categories));
  };
}

export function setCurrentCategory(id) {
  return async (dispatch, getState) => {
    const selectedCategory = getState().data.selectedCategory;

    if (selectedCategory !== id) {
      dispatch(setSelectedCategory(id));
      dispatch(getProducts());
    }
  };
}

export function getProducts() {
  return async (dispatch, getState) => {
    const selectedCategory = getState().data.selectedCategory;

    const { data } = await Axios.get(
      'https://gorest.co.in/public-api/products'
    );

    const products = data.data.filter((product) => {
      return product.categories.find(
        (category) => category.id === selectedCategory
      );
    });

    dispatch(setProducts(products));
  };
}

export function getRecords() {
  return async (dispatch, getState) => {
    const { searchString } = getState().data;

    const records = await getEntries({
      content_type: 'records',
      'fields.title[match]': searchString,
    });

    log('info', `Records found using "${searchString}"`, records);

    dispatch(setRecords(records));
  };
}

export function createRecord(values) {
  return async (dispatch) => {
    try {
      const entry = await createEntry(values);
      log(
        'success',
        `Entry with id: "${entry.id}" was created and published.`,
        entry
      );
      dispatch(addRecord(entry));
    } catch (error) {
      console.error(error);
    }
  };
}

export function getImages() {
  return async (dispatch, getState) => {
    const assets = await getAssets();

    log('info', 'Assets retrieved', assets);

    dispatch(setAssets(assets));
  };
}
