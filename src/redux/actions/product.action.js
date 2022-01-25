import fakeStoreApi from "../../apis/fakeStoreApi";
import { actionTypes } from "../constants/action-types";

//*Action Creator for fetching products products >->
export const fetchProducts = () => {
  return async function (dispatch, getState) {
    try {
      const response = await fakeStoreApi.get("/products");
      dispatch({ type: actionTypes.FETCH_PRODUCTS, payload: response.data });
    } catch (error) {
      console.log(error);
    }
  };

  // ! So here we have use a middleware to execute asynchronous task inside a action creator function
  // ! that is why we have use Redux-Thunk which allows to do async task so we will not get the error of "plain
  // ! javascript object || use a custom middleware || "
  // const response = await axios.get("/products");
  // console.log(response);
  // return {
  //   type: actionTypes.FETCH_PRODUCTS,
  //   payload: response,
  // };
};

// *Creating a action creator and a middleware for a single product
export const fetchProduct = (id) => async (dispatch) => {
  try {
    const response = await fakeStoreApi.get(`/products/${id}`);
    dispatch({ type: actionTypes.SELECTED_PRODUCT, payload: response.data });
  } catch (error) {
    console.log(error);
  }
};

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
