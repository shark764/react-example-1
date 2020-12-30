import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Redirect, Route } from 'react-router-dom';
import PropTypes from 'prop-types';

function PrivateRoute({ children, ...rest }) {
  const { isAuthenticated, isLoading } = useAuth0();

  return (
    <Route {...rest}>
      {!isLoading && isAuthenticated ? (
        children
      ) : (
        <Redirect
          to={{
            pathname: '/login',
          }}
        />
      )}
    </Route>
  );
}
PrivateRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PrivateRoute;
