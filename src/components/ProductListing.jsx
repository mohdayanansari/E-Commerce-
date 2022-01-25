import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Product from "./Product";
import { fetchProducts, setProducts } from "../redux/actions/product.action";

const ProductListing = () => {
  const products = useSelector((state) => state);
  const dispatch = useDispatch();

  // ! FAKE DATA API CALL
  // todo NOW WE DON'T NEED TO CALL API FROM HERE IT WILL CALL THROUGH ACTION CREATOR >->
  // const fetchFakeProducts = async () => {
  //   try {
  //     const response = await axios.get("https://fakestoreapi.com/products");
  //     dispatch(setProducts(response.data));

  //   console.log(response.data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);
  //   console.log("Products: ", products);

  return (
    <>
      <h1>Product Listing</h1>

      {/* Product container */}
      <div>
        <Product />
      </div>
    </>
  );
};

export default ProductListing;
