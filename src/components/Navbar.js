import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, Avatar, Box } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = ({ loggedIn, toggleDrawer }) => {
  return (
    <AppBar position="static">
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
          DashBoard
        </Typography>
        {loggedIn ? (
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Avatar alt="User Avatar" src="dummy-avatar.jpg" />
            <Typography variant="body1" sx={{ ml: 1 }}>
              Welcome, User!
            </Typography>
          </Box>
        ) : (
          <Typography variant="body1">Please Log In</Typography>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
