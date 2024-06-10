import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children, isAuthenticated }) => {
  if (!isAuthenticated) {
    return <Navigate to="http://localhost:3000/" />;
  }
  return children;
};

export default ProtectedRoute;
