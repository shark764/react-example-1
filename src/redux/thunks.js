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
  setUsers,
  setAssets,
  addUser,
} = dataSlice.actions;

export function getCategories() {
  return async (dispatch) => {
    const { data } = await Axios.get(
      'https://gorest.co.in/public-api/categories',
    );

    const categories = data.data;

    dispatch(setCategories(categories));
  };
}

export function getProducts() {
  return async (dispatch, getState) => {
    const { selectedCategory } = getState().data;

    const { data } = await Axios.get(
      'https://gorest.co.in/public-api/products',
    );

    const products = data.data.filter((product) => product.categories.find((category) => category.id === selectedCategory));

    dispatch(setProducts(products));
  };
}

export function setCurrentCategory(id) {
  return async (dispatch, getState) => {
    const { selectedCategory } = getState().data;

    if (selectedCategory !== id) {
      dispatch(setSelectedCategory(id));
      dispatch(getProducts());
    }
  };
}

export function getUsers() {
  return async (dispatch, getState) => {
    const { searchString } = getState().data;

    const users = await getEntries({
      content_type: 'users',
      'fields.name[match]': searchString,
    });

    log('info', `Users found using "${searchString}"`, users);

    dispatch(setUsers(users));
  };
}

export function createUser(values) {
  return async (dispatch) => {
    try {
      const entry = await createEntry(values);
      log(
        'success',
        `Entry with id: "${entry.id}" was created and published.`,
        entry,
      );
      dispatch(addUser(entry));
    } catch (error) {
      console.error(error);
    }
  };
}

export function getImages() {
  return async (dispatch) => {
    const assets = await getAssets();

    log('info', 'Assets retrieved', assets);

    dispatch(setAssets(assets));
  };
}
