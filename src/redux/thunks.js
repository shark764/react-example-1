import Axios from 'axios';
import dataSlice from './reducers/dataSlice';

const { setCategories, setSelectedCategory, setProducts } = dataSlice.actions;

export function getCategories() {
  return async (dispatch, getState) => {
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
