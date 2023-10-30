import React from 'react';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import GitHubIcon from '@mui/icons-material/GitHub';
import { ThemedButton } from '../commons/buttons';

const Landing = ({ userRole }) => {
  const navigate = useNavigate(); 

  const containerStyle = {
    position: 'relative',
    height: 'calc(100vh - 64px)',
    overflowY: 'hidden'
  };

  const overlayStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
  };

  return (
    <div style={containerStyle}>
      <img
        src="bg1.jpeg"
        alt="Background Image"
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
        }}
      />
      <div style={overlayStyle}>
        <Typography variant="h2" sx={{ fontWeight: '600' }}>
          Welcome to GitList
        </Typography>
        <div>
          <Link to="/dashboard">
            <ThemedButton content="Check out our user list" icon={<GitHubIcon />} />
          </Link>
      </div>
      </div>
    </div>
  );
};

export default Landing;
