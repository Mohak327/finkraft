import React, { useState } from 'react';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Navbar from './components/Navbar';
import SideNavbar from './components/SideNavbar';
import {userCredentials} from './data/userCredentials';
import RoutesMap from './components/RoutesMap';
import { BrowserRouter } from 'react-router-dom';

const App = () => {
  const [loggedIn, setLoggedIn] = useState(
    localStorage.getItem('isLoggedIn') === 'true'
  );
  const [userRole, setUserRole] = useState(
    localStorage.getItem('userRole') || ''
  );
  const [isSideNavOpen, setIsSideNavOpen] = useState(false);
  const [usernameVal, setUsernameVal] = useState('');

  const handleLogin = ({ username, password }) => {
    const user = userCredentials.find(
      (user) => user.username === username && user.password === password
    );
  
    if (user) {
      // Store a token or session identifier in local storage
      localStorage.setItem('isLoggedIn', 'true');
      localStorage.setItem('userRole', user.active_module);
      localStorage.setItem('username', user.username);
      setUsernameVal(username);
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
    localStorage.removeItem('username');
    setLoggedIn(false);
    setUserRole('');
  };

  return (
    <BrowserRouter>
      <div>
        <Navbar loggedIn={loggedIn} toggleDrawer={toggleDrawer} username={usernameVal}/>
        {loggedIn && <SideNavbar
          isOpen={isSideNavOpen}
          toggleDrawer={toggleDrawer}
          userRole={userRole}
          handleLogout={handleLogout}
        />}
        <RoutesMap
            loggedIn={loggedIn}
            userRole={userRole}
            handleLogin={handleLogin}
            handleLogout={handleLogout}
          />
        {/* <div>
          {loggedIn ? (
            <Dashboard userRole={userRole} />
          ) : (
            <Login handleLogin={handleLogin} />
          )}
        </div> */}
      </div>
    </BrowserRouter>
  );
};

export default App;
