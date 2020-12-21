import { filter } from 'lodash';
import {
    GET_PRODUCTS,
    PRODUCT_ERROR,
    SEARCH_PRODUCT,
    PRICE_FILTER,
    CATEGORY_FILTER
  } from '../constants/type';
  
  const initialState = {
    products: [],
    productsLength: 0,
    product: null,
    loading: true,
    error: null
  };
  
  export const productReducer = (state = initialState, action) => {
    const { type, payload } = action;
  
    switch (type) {
      case GET_PRODUCTS:
        return {
          ...state,
          products: payload,
          productsLength: payload.length,
          loading: false
        };
      case PRODUCT_ERROR:
        return {
          ...state,
          error: payload,
          loading: false
        };
      case SEARCH_PRODUCT:
        return {
          ...state,
          productsLength: payload.length,
          products: state.products.filter(product => product.title.toLowerCase().indexOf(payload) !== -1 ),
          // products: filter(state.products, (product)=> product.title.toLowerCase().includes(payload) !== -1 ),
          loading: false
        };
      case PRICE_FILTER:
      return {
        ...state,
        productsLength: payload.length,
        // products: state.products.filter(product => product.price >= payload[0] && product.price <= payload[1]),
        products: filter(state.products, (product)=> product.price >= payload[0] && product.price <= payload[1]),
        loading: false
       };
      case CATEGORY_FILTER:
        return {
          ...state,
          productsLength: payload.length,
          // products: state.products.filter(product => product.category === payload),
          products: filter(state.products,['category', payload]),
          loading: false
         };
      default:
        return state;
    }
  }
  