import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter, Route, Switch, Redirect } from "react-router-dom";
import PropTypes from "prop-types";
import { Login, Signup, UserHome } from "./components";
import { me, fetchAccount } from "./store";
import { fetchProducts } from "./store/reducers/productReducer";
import { fetchCart } from "./store/reducers/cartReducer";
import { fetchCategories } from "./store/reducers/categoryReducer";
import ProductsList from "./components/ProductsList";
import ProductDetail from "./components/ProductDetail";
import Search from "./components/Search";
import AddProduct from "./components/AddProduct";

import Cart from "./components/Cart";

import AccountDetails from "./components/AccountDetails";

/**
 * COMPONENT
 */
class Routes extends Component {
  componentDidMount() {
    this.props.loadInitialData();
  }
  render() {
    const { isLoggedIn, isFetching } = this.props;
    if (!isFetching) {
      return <div>Loading...</div>;
    }

    return (
      <Switch>
        {/* Routes placed here are available to all visitors */}
        <Redirect exact path="/" to="/home" />
        <Route exact path="/home" component={UserHome} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/products" component={ProductsList} />
        <Route exact path="/products/food" component={ProductsList} />
        <Route exact path="/products/drinks" component={ProductsList} />
        <Route exact path="/products/search" component={Search} />
        <Route exact path="/products/addproduct" component={AddProduct} />
        <Route exact path="/products/drinks/:id" component={ProductDetail} />
        <Route exact path="/products/food/:id" component={ProductDetail} />
        <Route exact path="/account/cart" component={Cart} />
        {isLoggedIn && (
          <Switch>
            {/* Routes placed here are only available after logging in */}
            <Route path="/home" component={UserHome} />
            <Route path="/account" component={AccountDetails} />
          </Switch>
        )}
        {/* Displays our Login component as a fallback */}
        <Route component={UserHome} />
      </Switch>
    );
  }
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    // Being 'logged in' for our purposes will be defined has having a state.user that has a truthy id.
    // Otherwise, state.user will be an empty object, and state.user.id will be falsey
    isFetching: state.products.isFetching,
    isLoggedIn: !!state.user.id
  };
};

const mapDispatch = dispatch => {
  return {
    loadInitialData: () => {
      dispatch(fetchProducts());
      dispatch(fetchCategories());
      dispatch(me());
      dispatch(fetchCart());
      dispatch(fetchAccount());
    }
  };
};

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
export default withRouter(
  connect(
    mapState,
    mapDispatch
  )(Routes)
);

/**
 * PROP TYPES
 */
Routes.propTypes = {
  loadInitialData: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
};
