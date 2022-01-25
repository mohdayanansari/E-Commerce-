import React, { useEffect } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import Product from "./Product";
import { setProducts } from "../redux/actions/product.action";

const ProductListing = () => {
  const products = useSelector((state) => state);
  const dispatch = useDispatch();

  // ! FAKE DATA API CALL
  const fetchFakeProducts = async () => {
    try {
      const response = await axios.get("https://fakestoreapi.com/products");
      dispatch(setProducts(response.data));

    //   console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchFakeProducts();
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
