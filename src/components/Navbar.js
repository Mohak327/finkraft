import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, Avatar, Box, capitalize } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import { capitalizeFirstLetter } from '../helpers/stringFunctions';

const Navbar = ({ loggedIn, toggleDrawer }) => {
  const username = localStorage.getItem('username');
  return (
    <AppBar position="static" sx={{ background: 'linear-gradient(to left, #6e5494, #300066, #300066)' }}>
      <Toolbar>
        {loggedIn && <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={toggleDrawer(true)}
          edge="start"
        >
          <MenuIcon />
        </IconButton>}
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Link to="/" style={{ textDecoration: 'none', color: 'inherit', fontWeight: 'bold' }}>
            GitList
          </Link>
        </Typography>
        {loggedIn ? (
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Avatar alt={capitalizeFirstLetter(username)} src="dummy-avatar.jpg" />
            <Typography variant="body1" sx={{ ml: 1 }}>
              {capitalizeFirstLetter(username)}
            </Typography>
          </Box>
        ) : (
          <Typography variant="body1">
            <Link to="/login" style={{ textDecoration: 'none', color: 'inherit' }}>
              Log In
            </Link>
          </Typography>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
