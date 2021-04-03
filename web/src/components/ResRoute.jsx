import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const ResRoute = ({ currentUser, path, component }) => {
  return (
    <Route
      exact
      path={path}
      render={() => (!currentUser ? <Redirect to="/login" /> : component)}
    />
  );
};

export default ResRoute;
