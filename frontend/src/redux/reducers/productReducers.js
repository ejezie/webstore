import * as actionTypes from "../constants/productConstants";

export const getProductsReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case actionTypes.GET_PRODUCTS_REQUEST:
      return {
        loading: true,
        products: [],
      };
    case actionTypes.GET_PRODUCTS_SUCCESS:
      return {
        loading: false,
        products: action.payload,
      };
    case actionTypes.GET_PRODUCTS_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
        return state;
  }
};

export const getProductDetailsReducer = (state = { products: {} }, action) => {
  switch (action.type) {
    case actionTypes.GET_PRODUCT_DETAIL_REQUEST:
      return {
        loading: true,
      };
    case actionTypes.GET_PRODUCT_DETAIL_SUCCESS:
      return {
        loading: false,
        products: action.payload,
      };
    case actionTypes.GET_PRODUCT_DETAIL_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    case actionTypes.GET_PRODUCT_DETAIL_RESET:
      return {
        product: {},
      };
    default:
      return state;
  }
};
