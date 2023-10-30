import React from 'react';
import { Drawer, List, ListItem, ListItemText, Button } from '@mui/material';
import config from '../config'; 

const SideNavbar = ({ isOpen, toggleDrawer, userRole, handleLogout }) => {
  const { menuItems, userRoles } = config;

  const accessibleModules = userRoles[userRole]?.accessibleModules || [];
  const drawerWidth = '250px';

  return (
    <Drawer id='drawer' open={isOpen} onClose={toggleDrawer(false)} 
    sx={{
      width: drawerWidth,
      flexShrink: 0,
      '& .MuiDrawer-paper': {
        width: drawerWidth,
        boxSizing: 'border-box',
      },
    }}>
      <List>
        {menuItems.map((item, index) => {
          if (accessibleModules.includes(item.module)) {
            return (
              <ListItem button key={index}>
                <ListItemText primary={item.text} />
              </ListItem>
            );
          } else {
            return null;
          }
        })}
      </List>
      <Button
        onClick={handleLogout}
        variant="contained"
        color="secondary"
        sx={{ position: 'absolute', bottom: '16px', left: '16px' }}
      >
        Logout
      </Button>
    </Drawer>
  );
};

export default SideNavbar;
