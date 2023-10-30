import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Login from './Login';
import Dashboard from './Dashboard';
import Landing from './Landing';

// if the user tries to go to any route when logged out, he's redirected to the login page
const PrivateRoute = ({ element, loggedIn }) => {
  return loggedIn ? element : <Navigate to="/login" />;
};

const RoutesMap = ({ loggedIn, userRole, handleLogin, handleLogout }) => {
  return (
    <Routes>
      <Route
        path="/dashboard"
        element={<PrivateRoute element={<Dashboard userRole={userRole} />} loggedIn={loggedIn} />}
      />
      <Route
        path="/login"
        element={<Login handleLogin={handleLogin} />}
      />
      <Route
        path="/"
        element={<Landing userRole={userRole} />}
      />
    </Routes>
  );
};

export default RoutesMap;
