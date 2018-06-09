import React from "react";

const ProductForm = props => {
  return (
    <div>
      <div className="product-form" />
      <section>
        <br />
        <h1>Product Info</h1>
        <div className="signin-container">
          <div className="buffer">
            <form onSubmit={props.handleSubmit}>
              <div className="form-group">
                <label>Product Name</label>
                <input
                  name="name"
                  type="text"
                  onChange={props.handleChange}
                  className="form-control"
                  required
                />
              </div>
              <div className="form-group">
                <label>Image Url</label>
                <input
                  name="image url"
                  type="text"
                  onChange={props.handleChange}
                  className="form-control"
                  required
                />
              </div>
              <div className="form-group">
                <label>Description</label>
                <input
                  name="description"
                  type="text"
                  onChange={props.handleChange}
                  className="form-control"
                  required
                />
              </div>
              <div className="form-group">
                <label>Price</label>
                <input
                  name="price"
                  type="text"
                  onChange={props.handleChange}
                  className="form-control"
                  required
                />
              </div>
              <div className="form-group">
                <label>Quantity</label>
                <input
                  name="inventoryQuantity"
                  type="text"
                  onChange={props.handleChange}
                  className="form-control"
                  required
                />
              </div>
              <div className="form-group">
                Category
                <select
                  name="categoryId"
                  className="form-control"
                  onChange={props.handleChange}
                >
                  <option value="Select Category" className="form-control">
                    Select Category
                  </option>
                  {props.categories.list.map(category => (
                    <option
                      value={category.id}
                      key={category.id}
                      className="form-control"
                    >
                      {category.name}
                    </option>
                  ))}
                </select>
              </div>
              <button type="submit" className="product-form-btn">
                Submit
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductForm;
