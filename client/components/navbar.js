import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '../store';

const Navbar = ({ handleClick, isLoggedIn }) => (
  <div>
    <div>
      <div>
        <h1>Provisions, Alcohol and Libations</h1>
      </div>
      <nav>
        <div>
          <Link to="/home">
            <i className="fas fa-home fa-2x" /> Home
          </Link>
          <Link to="/products">
            <i className="fas fa-list-alt fa-2x" />
            Products
          </Link>
          <Link to="/products/drinks">
            <i className="fas fa-beer fa-2x" />
            Drinks
          </Link>
          <Link to="/products/food">
            <i className="fas fa-utensils  fa-2x" />
            Food
          </Link>
          <Link to="/cart">
            <i className="fas fa-shopping-cart fa-2x" />
            Cart
          </Link>
          <Link to="/products/search">
            <i className="fas fa-search fa-2x" />Search
          </Link>
          {isLoggedIn ? (
            <div>
              {/* The navbar will show these links after you log in */}
              <a href="#" onClick={handleClick}>
                <i className="fas fa-sign-out-alt fa-2x" />
                Logout
              </a>
            </div>
          ) : (
            <div>
              {/* The navbar will show these links before you log in */}
              <Link to="/login">
                <i className="fas fa-sign-in-alt fa-2x" />Login
              </Link>
              <Link to="/signup">Sign Up</Link>
            </div>
          )}
        </div>
      </nav>
      <hr />
    </div>
  </div>
);

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    isLoggedIn: !!state.user.id,
  };
};

const mapDispatch = dispatch => {
  return {
    handleClick() {
      dispatch(logout());
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
