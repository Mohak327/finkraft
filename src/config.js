// src/config.js

const config = {
    userRoles: {
      admin: {
        accessibleModules: ['module1', 'module2', 'module3'],
      },
      user: {
        accessibleModules: ['module1'],
      },
    },
    menuItems: [
      { text: 'Menu Item 1', module: 'module1' },
      { text: 'Menu Item 2', module: 'module2' },
      { text: 'Menu Item 3', module: 'module3' },
    ],
  };
  
  export default config;
  