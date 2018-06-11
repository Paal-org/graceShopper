import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '../store';
import { clearCart } from '../store/reducers/cartReducer';
import { clearAccount } from '../store/reducers/accountReducer';

export const Navbar = props => {
  const { handleClick, isLoggedIn, categories, firstName, cart } = props;
  const totalCartItem =
    cart.products &&
    cart.products
      .map(product => product.lineItem.purchaseQuantity)
      .reduce((total, num) => total + num, 0);

  return (
    <div>
      <div>
        <div className="row">
          <Link to="/home" className="col-8">
            <h1>Provisions, Alcohol and Libations</h1>
          </Link>
          {/* ----------------------LOGIN-SIGNUP-LOGOUT----------------------- */}
          <div>
            {isLoggedIn ? (
              <div>
                {/* The navbar will show these links after you log in */}
                <button type="button" className="btn navbar-light bg-light">
                  <Link to="/account" className="col-2">
                    <img className="nav-icon" src="/img/godzilla.png" />
                    <span id="welcome">Welcome {firstName}</span>
                  </Link>
                </button>
                <button type="button" className="btn navbar-light bg-light">
                  <a href="#" onClick={handleClick} className="col-2">
                    <img className="nav-icon" src="/img/exit.png" />
                    Logout
                  </a>
                </button>
              </div>
            ) : (
              <div>
                {/* The navbar will show these links before you log in */}
                <button type="button" className="btn navbar-light bg-light">
                  <Link to="/signup" className="col-2">
                    <img className="nav-icon" src="/img/edit.png" />Sign Up
                  </Link>
                </button>
                <button type="button" className="btn navbar-light bg-light">
                  <Link to="/login" className="col-2">
                    <img className="nav-icon" src="/img/enter.png" />Login
                  </Link>
                </button>
              </div>
            )}
          </div>
        </div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light row">
          <div className="col-10">
            {/* ------------------------HOME----------------------- */}
            <button type="button" className="btn navbar-light bg-light">
              <Link to="/home">
                <img className="nav-icon" src="/img/house.png" /> Home
              </Link>
            </button>
            {/* ------------------------PRODUCTS----------------------- */}
            <div className="btn-group ">
              <button type="button" className="btn navbar-light bg-light">
                <Link to="/products">
                  <img className="nav-icon" src="/img/list.png" />
                  Products
                </Link>
              </button>
              <button
                type="button"
                className="btn dropdown-toggle dropdown-toggle-split navbar-light bg-light"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <span className="sr-only">Toggle Dropdown</span>
              </button>
              <div className="dropdown-menu">
                {categories.list &&
                  categories.list.map(category => {
                    return (
                      <div key={category.id} className="dropdown-item">
                        <img className="nav-icon" src={category.imageUrl} />
                        <a href={'/products/' + category.name}>
                          {category.name}
                        </a>
                      </div>
                    );
                  })}
              </div>
            </div>
            {/* ------------------------SEARCH----------------------- */}
            <button type="button" className="btn navbar-light bg-light">
              <Link to="/products/search">
                <img className="nav-icon" src="/img/search.png" />Search
              </Link>
            </button>
          </div>
          {/* ------------------------CART----------------------- */}
          <div className="col-2">
            <button type="button" className="btn navbar-light bg-light">
              <Link to="/account/cart">
                {totalCartItem ? (
                  <img className="nav-icon" src="/img/shopping-basket.png" />
                ) : (
                  <img
                    className="nav-icon"
                    src="/img/shopping-basket-empty.png"
                  />
                )}{' '}
                {totalCartItem} Cart
              </Link>
            </button>
          </div>
        </nav>
      </div>
    </div>
  );
};

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    isLoggedIn: !!state.user.id,
    categories: state.categories,
    firstName: state.user.firstName,
    cart: state.cart.cart,
    isFetching: state.cart.isFetching,
  };
};

const mapDispatch = dispatch => {
  return {
    handleClick() {
      dispatch(logout());
      dispatch(clearCart());
      dispatch(clearAccount());
    },
  };
};

export default connect(
  mapState,
  mapDispatch
)(Navbar);

/**
 * PROP TYPES
 */
Navbar.propTypes = {
  handleClick: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired,
};
