import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

const RouteWrapper = ({ component: Component, isPrivate = false, ...rest }) => {
  const signed = false;
  if (!signed && isPrivate) return <Redirect to="/" />;
  if (signed && !isPrivate) return <Redirect to="/dashboard" />;

  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Route component={Component} {...rest} />;
};

RouteWrapper.propTypes = {
  isPrivate: PropTypes.bool,
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
    .isRequired,
};

RouteWrapper.defaultProps = {
  isPrivate: false,
};
export default RouteWrapper;
