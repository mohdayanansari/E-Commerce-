import { actionTypes } from "../constants/action-types";

//*Action Creator for adding products/setting products >->
export const setProducts = (products) => {
  return {
    type: actionTypes.SET_PRODUCTS,
    payload: products,
  };
};

//*Action Creator for selecting products >->
export const selectedProduct = (products) => {
  return {
    type: actionTypes.SELECTED_PRODUCT,
    payload: products,
  };
};

//*Action Creator for removing selecting products >->
export const removeSelectedProduct = () => {
  return {
    type: actionTypes.REMOVE_SELECTED_PRODUCT,
  };
};
