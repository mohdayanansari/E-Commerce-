import { combineReducers } from "redux";
import { productReducer, selectedProduct } from "./product.reducer";

const reducers = combineReducers({
  allProducts: productReducer,
  product: selectedProduct
});

export default reducers;
