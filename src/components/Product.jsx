import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Product = () => {
  const products = useSelector((state) => state.allProducts.products);

  const renderList = products.map((product) => {
    const { id, title, image, category, price } = product;
    return (
      <div key={id}>
        <Link to={`/product/${id}`}>
          {/* single product */}
          <div className="w-full h-[400px] transition-all transform duration-300 hover:scale-[1.02] border border-indigo-200 p-5 drop-shadow-lg bg-white rounded">
            <div className="h-16">
              <h1>{title}</h1>
            </div>
            <img src={image} alt="product" className="w-[200px] h-[200px]" />
            <div className="px-[5px] mt-5 pb-[3px] rounded text-xs text-indigo-400 drop-shadow bg-indigo-200 inline-block">
              {category}
            </div>
            <h2>{price * 70} ₹</h2>
          </div>
        </Link>
      </div>
    );
  });

  return (
    <>
      <div className="px-[50px]  w-full grid grid-cols-3 gap-5 mt-10">
        {renderList}
      </div>
    </>
  );
};

export default Product;
