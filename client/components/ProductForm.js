import React from "react";
import { connect } from "react-redux";

const ProductForm = props => {
  const { handleSubmit, handleChange, categories } = props;
  console.log("EDIT", props);
  return (
    <div>
      <div className="product-form" />
      <section>
        <br />
        <h1>Product Info</h1>
        <div className="signin-container">
          <div className="buffer">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Product Name</label>
                <input
                  name="name"
                  type="text"
                  onChange={handleChange}
                  className="form-control"
                  value={props.name}
                  required
                />
              </div>
              <div className="form-group">
                <label>Image Url</label>
                <input
                  name="imageUrl"
                  type="text"
                  onChange={handleChange}
                  className="form-control"
                  value={props.imageUrl}
                  required
                />
              </div>
              <div className="form-group">
                <label>Description</label>
                <input
                  name="description"
                  type="text"
                  onChange={handleChange}
                  className="form-control"
                  value={props.description}
                  required
                />
              </div>
              <div className="form-group">
                <label>Price</label>
                <input
                  name="price"
                  type="text"
                  onChange={handleChange}
                  className="form-control"
                  value={props.price}
                  required
                />
              </div>
              <div className="form-group">
                <label>Quantity</label>
                <input
                  name="inventoryQuantity"
                  type="text"
                  onChange={handleChange}
                  value={props.inventoryQuantity}
                  className="form-control"
                  required
                />
              </div>
              <div className="form-group">
                Category
                <select
                  name="categoryId"
                  value={props.categoryId}
                  className="form-control"
                  onChange={handleChange}
                >
                  <option value="Select Category" className="form-control">
                    Select Category
                  </option>
                  {categories &&
                    categories.list.map(category => (
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

const mapState = state => {
  return {
    categories: state.categories
  };
};

export default connect(mapState)(ProductForm);
