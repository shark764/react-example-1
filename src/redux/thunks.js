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
  setCountries,
  setAssets,
  addCountry,
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

export function getCountries() {
  return async (dispatch, getState) => {
    const { searchString } = getState().data;

    const countries = await getEntries({
      content_type: 'countries',
      'fields.title[match]': searchString,
    });

    log('info', `Countries found using "${searchString}"`, countries);

    dispatch(setCountries(countries));
  };
}

export function createCountry(values) {
  return async (dispatch) => {
    try {
      const entry = await createEntry(values);
      log(
        'success',
        `Entry with id: "${entry.id}" was created and published.`,
        entry
      );
      dispatch(addCountry(entry));
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
