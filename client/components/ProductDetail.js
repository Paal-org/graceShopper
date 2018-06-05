import React from "react";
import { connect } from "react-redux";

const ProductDetail = props => {
  const { selectedProduct } = props;
  return (
    <div>
      <div id="main-prod-description">
        <div>
          <h2>{selectedProduct.name}</h2>
          {/* need ternary or way to determine header based on route*/}
        </div>
        <div>{selectedProduct.imageUrl}</div>
        <div>
          About this Product:
          {selectedProduct.description}
        </div>
      </div>
      <div id="add-to-cart">
        Price: {selectedProduct.price}
        In stock: {selectedProduct.inventoryQuantity ? "yes" : "no"}
      </div>
    </div>
  );
};

const mapState = (state, ownProps) => {
  const id = +ownProps.match.params.id;
  const findProduct = state.products.list.find(product => product.id === id);
  return {
    selectedProduct: findProduct
  };
};

export default connect(mapState)(ProductDetail);
