import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '../store';
import { fetchCategories } from '../store/reducers/categoryReducer';
import { clearCart } from '../store/reducers/cartReducer';
import { clearAccount } from '../store/reducers/accountReducer';

const Navbar = props => {
  const { handleClick, isLoggedIn, categories, firstName, cart } = props;
  console.log(categories);
  return (
    <div>
      <div>
        <div>
          <Link to="/home">
            <h1>Provisions, Alcohol and Libations</h1>
          </Link>
        </div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div>
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
            {/* ------------------------CART----------------------- */}
            <button type="button" className="btn navbar-light bg-light">
              <Link to="/account/cart">
                {cart.products && cart.products.length ? (
                  <img className="nav-icon" src="/img/shopping-basket.png" />
                ) : (
                  <img
                    className="nav-icon"
                    src="/img/shopping-basket-empty.png"
                  />
                )}{' '}
                {cart.products && cart.products.length} Cart
              </Link>
            </button>
            {/* ------------------------SEARCH----------------------- */}
            <button type="button" className="btn navbar-light bg-light">
              <Link to="/products/search">
                <img className="nav-icon" src="/img/search.png" />Search
              </Link>
            </button>
            {/* ----------------------LOGIN-SIGNUP-LOGOUT----------------------- */}
            {isLoggedIn ? (
              <div>
                {/* The navbar will show these links after you log in */}
                <button type="button" className="btn navbar-light bg-light">
                  <Link to="/account">
                    <img className="nav-icon" src="/img/godzilla.png" />Welcome{' '}
                    {firstName}
                  </Link>
                  <a href="#" onClick={handleClick}>
                    <img className="nav-icon" src="/img/exit.png" />
                    Logout
                  </a>
                </button>
              </div>
            ) : (
              <div>
                {/* The navbar will show these links before you log in */}
                <button type="button" className="btn navbar-light bg-light">
                  <Link to="/login">
                    <img className="nav-icon" src="/img/enter.png" />Login
                  </Link>
                </button>
                <button type="button" className="btn navbar-light bg-light">
                  <Link to="/signup">
                    <img className="nav-icon" src="/img/edit.png" />Sign Up
                  </Link>
                </button>
              </div>
            )}
          </div>
        </nav>
        <hr />
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
    // categories: () => {
    //   dispatch(fetchCategories());
    // },
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
