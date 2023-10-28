import React from 'react';
import Typography from '@mui/material/Typography';

const Dashboard = ({ userRole }) => {
  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Welcome to Dashboard
      </Typography>
      <Typography variant="body1">
        {userRole === 'admin'
          ? 'You have admin privileges.'
          : 'You have regular user privileges.'}
      </Typography>
    </div>
  );
};

export default Dashboard;
