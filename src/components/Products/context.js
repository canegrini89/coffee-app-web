import React from "react";

const ProductsContext = React.createContext(null);

export const withProducts = (Component) => {
  return function ProductsComponent(props) {
    return (
      <ProductsContext.Consumer>
        {(products) => <Component {...props} products={products} />}
      </ProductsContext.Consumer>
    );
  };
};

export default ProductsContext;
