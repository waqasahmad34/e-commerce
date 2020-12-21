import data from '../data/products.json';
import {
  GET_PRODUCTS,
  PRODUCT_ERROR,
  SEARCH_PRODUCT,
  PRICE_FILTER,
  CATEGORY_FILTER
} from '../constants/type';

// Get products
export const getProducts = () => dispatch => {
  try {
    dispatch({
      type: GET_PRODUCTS,
      payload: data
    });
  } catch (err) {
    dispatch({
      type: PRODUCT_ERROR,
      payload: 'Products Not Found!'
    });
  }
};

// Search product
export const searchProduct = search => dispatch => {
  try {
    dispatch({
      type: SEARCH_PRODUCT,
      payload: search
    });
  } catch (err) {
    dispatch({
      type: PRODUCT_ERROR,
      payload: 'Products Not Found!'
    });
  }
};

// filter product on price
export const priceFilter = price => dispatch => {
  try {
    dispatch({
      type: PRICE_FILTER,
      payload: price
    });
  } catch (err) {
    dispatch({
      type: PRODUCT_ERROR,
      payload: 'Products Not Found!'
    });
  }
};

// filter product on category
export const categoryFilter = category => dispatch => {
  try {
    dispatch({
      type: CATEGORY_FILTER,
      payload: category
    });
  } catch (err) {
    dispatch({
      type: PRODUCT_ERROR,
      payload: 'Products Not Found!'
    });
  }
};