import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import {
  fetchProduct,
  selectedProduct,
  removeSelectedProduct,
} from "../redux/actions/product.action";
import { useSelector } from "react-redux";

const ProductDetails = () => {
  const product = useSelector((state) => state.product);
  const { productId } = useParams();
  const dispatch = useDispatch();
  //   console.log(product);
  //   console.log("🎯", productId);

  // const fetchProductDetails = async () => {
  //   try {
  //     const response = await axios.get(
  //       `https://fakestoreapi.com/products/${productId}`
  //     );
  //     dispatch(selectedProduct(response.data));
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  useEffect(() => {
    if (productId && productId !== "") dispatch(fetchProduct(productId));
    return () => {
      dispatch(removeSelectedProduct());
    };
  }, [productId]);

  const { title, image, description, price, category } = product;
  return (
    <>
      <div className="grid grid-cols-5 h-[80vh] bg-slate-200 rounded-lg border border-gray-300 m-10 p-10">
        {Object.keys(product).length === 0 ? (
          <div>...Loading</div>
        ) : (
          <>
            <div className="col-span-2 w-full h-full">
              <div className="flex h-[65vh] w-full object-cover ">
                <img src={image} alt="product" className="rounded" />
              </div>
            </div>
            <div className="col-span-3 pl-10">
              <h1 className="text-2xl font-bold text-slate-800">🎯 {title}</h1>
              <div className="bg-violet-200 text-violet-400 border border-violet-300 text-xs inline-block rounded px-2 pb-[3px] ">
                {category}
              </div>
              {/* <div className="bg-rose-200 text-rose-400 border border-rose-300 text-xs inline-block rounded px-2 pb-[3px] ml-2">
            Ratnig : {product.rating.rate}
          </div> */}
              <p className="mt-5 text-2xl font-bold text-slate-800">
                {price * 70} ₹
              </p>
              <p className="text-sm mt-5 text-black text-opacity-50">
                {description}
              </p>

              <button className="mt-5 px-5 pt-2 pb-3 transition-all duration-300 transform hover:scale-105 cursor-pointer bg-sky-500 text-sky-900 text-xl rounded-lg">
                Add to Cart
              </button>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default ProductDetails;
