import React from "react";

const ProductList = ({product}) => {
  return (
    <div>
      <h1>{product.name}</h1>
      <h3>{`${product.price} KD`}</h3>
      <img
        className="product-images"
        src={product.image}
        alt={product.name}
      />
    </div>
  );
};

export default ProductList;
