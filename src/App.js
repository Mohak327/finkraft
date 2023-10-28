import React, { useState } from 'react';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Navbar from './components/Navbar';
import SideNavbar from './components/SideNavbar';
import {userCredentials} from './data/userCredentials';

const App = () => {
  const [loggedIn, setLoggedIn] = useState(
    localStorage.getItem('isLoggedIn') === 'true'
  );
  const [userRole, setUserRole] = useState(
    localStorage.getItem('userRole') || ''
  );
  const [isSideNavOpen, setIsSideNavOpen] = useState(false);

  const handleLogin = ({ username, password }) => {
    const user = userCredentials.find(
      (user) => user.username === username && user.password === password
    );
  
    if (user) {
      // Store a token or session identifier in local storage
      localStorage.setItem('isLoggedIn', 'true');
      localStorage.setItem('userRole', user.active_module);
  
      setLoggedIn(true);
      setUserRole(user.active_module);
    } else {
      alert('Invalid credentials. Please try again.');
    }
  };

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }
    setIsSideNavOpen(open);
  };

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('userRole');
    setLoggedIn(false);
    setUserRole('');
  };

  return (
    <div>
      <Navbar loggedIn={loggedIn} toggleDrawer={toggleDrawer} />
      <SideNavbar
        isOpen={isSideNavOpen}
        toggleDrawer={toggleDrawer}
        userRole={userRole}
        handleLogout={handleLogout}
      />
      <div>
        {loggedIn ? (
          <Dashboard userRole={userRole} />
        ) : (
          <Login handleLogin={handleLogin} />
        )}
      </div>
    </div>
  );
};

export default App;
