import React, { useState } from "react";
import ProductContext from "./context";

const ProductProvider = ({ children }) => {
  const [productsGroup, setProductsGroup] = useState({});

  const handleAddProduct = () => {
    console.log("producto");
  };

  return (
    <ProductContext.Provider value={{ productsGroup, handleAddProduct }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
