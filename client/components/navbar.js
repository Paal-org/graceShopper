import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../store";
import { fetchCategories } from "../store/reducers/categoryReducer";

const Navbar = props => {
  const { handleClick, isLoggedIn, categories, firstName } = props;
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
            <Link to="/home">
              <img className="nav-icon" src="/img/house.png" /> Home
            </Link>
            <Link to="/products">
              <img className="nav-icon" src="/img/list.png" />
              Products
            </Link>
            <Link to="/products/drinks">
              <img className="nav-icon" src="/img/pint.png" />
              Drinks
            </Link>
            <Link to="/products/food">
              <img className="nav-icon" src="/img/hamburger.png" />
              Food
            </Link>
            <Link to="/account/cart">
              <img className="nav-icon" src="/img/shopping-basket.png" />
              Cart
            </Link>
            <Link to="/products/search">
              <img className="nav-icon" src="/img/search.png" />Search
            </Link>
            {isLoggedIn ? (
              <div>
                {/* The navbar will show these links after you log in */}
                <Link to="/account">
                  <img className="nav-icon" src="/img/godzilla.png" />Welcome{" "}
                  {firstName}
                </Link>
                <a href="#" onClick={handleClick}>
                  <img className="nav-icon" src="/img/exit.png" />
                  Logout
                </a>
              </div>
            ) : (
              <div>
                {/* The navbar will show these links before you log in */}
                <Link to="/login">
                  <img className="nav-icon" src="/img/enter.png" />Login
                </Link>
                <Link to="/signup">
                  <img className="nav-icon" src="/img/edit.png" />Sign Up
                </Link>
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
    firstName: state.user.firstName
  };
};

const mapDispatch = dispatch => {
  return {
    handleClick() {
      dispatch(logout());
    },
    categories: () => {
      dispatch(fetchCategories());
    }
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
  isLoggedIn: PropTypes.bool.isRequired
};
