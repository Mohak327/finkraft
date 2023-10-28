import React from 'react';
import { Drawer, List, ListItem, ListItemText, Button } from '@mui/material';
import config from '../config'; 

const SideNavbar = ({ isOpen, toggleDrawer, userRole, handleLogout }) => {
  const { menuItems, userRoles } = config;

  const accessibleModules = userRoles[userRole]?.accessibleModules || [];

  return (
    <Drawer open={isOpen} onClose={toggleDrawer(false)}>
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
