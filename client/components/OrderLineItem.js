import React from 'react';

const OrderLineItem = props => {
  const product = props.product;

  return (
    <tr>
      <td data-th="Product">
        <div className="row ">
          <div className="col-sm-4 hidden-xs">
            <img
              className="rounded mx-auto d-block cart-image"
              src={product.imageUrl}
              alt="..."
            />
          </div>
          <div className="col-sm-8">
            <h4 className="nomargin">{product.name}</h4>
          </div>
        </div>
      </td>
      <td data-th="Price">$ {product.lineItem.purchasePrice}</td>
      <td data-th="Quantity">{product.lineItem.purchaseQuantity}</td>
      <td data-th="Subtotal" className="text-center">
        $ {product.lineItem.purchaseQuantity * product.price}
      </td>
    </tr>
  );
};

export default OrderLineItem;
