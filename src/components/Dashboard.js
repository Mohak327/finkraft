import React from 'react';
import Typography from '@mui/material/Typography';

const Dashboard = ({ userRole }) => {
  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Welcome to Dashboard
      </Typography>
      <Typography variant="body1">
        You have {userRole} privileges.
      </Typography>
    </div>
  );
};

export default Dashboard;
