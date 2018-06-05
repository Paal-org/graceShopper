import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

/**
 * COMPONENT
 */
export const UserHome = props => {
  const { firstName } = props;
  const {isLoggedIn} = props

  return (
    <div>
      <h3>Welcome, {isLoggedIn && firstName}</h3>
    </div>
  );
};

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    firstName: state.user.firstName,
    isLoggedIn: !!state.user.id
  };
};

export default connect(mapState)(UserHome);

/**
 * PROP TYPES
 */
UserHome.propTypes = {
  firstName: PropTypes.string,
};
