import React, { useState } from 'react';
import { Button, TextField, Container, Box } from '@mui/material';
import { userCredentials } from '../data/userCredentials';
import { useNavigate } from 'react-router-dom';

const Login = ({ handleLogin }) => {
  const navigate = useNavigate(); 
  const [formData, setFormData] = useState({ username: '', password: '' });
  const [errors, setErrors] = useState({ username: '', password: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Clear error when user starts typing
    setErrors({ ...errors, [name]: '' });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form inputs
    let valid = true;
    const newErrors = { ...errors };

    if (formData.username.trim() === '') {
      newErrors.username = 'Username is required';
      valid = false;
    }

    if (formData.password.trim() === '') {
      newErrors.password = 'Password is required';
      valid = false;
    }

    if (valid) {
      // Check if provided credentials match user data (replace this with your actual authentication logic)
      const user = userCredentials.find(
        (user) =>
          user.username === formData.username &&
          user.password === formData.password
      );

      if (user) {
        handleLogin(formData);
        navigate('/dashboard');
      } else {
        newErrors.username = 'Invalid username or password';
        newErrors.password = 'Invalid username or password';
        setErrors(newErrors);

        // Set border color of input fields to red
        document.getElementById('username').style.borderColor = 'red';
        document.getElementById('password').style.borderColor = 'red';
      }
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <Container>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          mt: 4,
        }}
      >
        <form onSubmit={handleSubmit}>
          <TextField
            name="username"
            label="Username"
            variant="outlined"
            value={formData.username}
            onChange={handleChange}
            fullWidth
            margin="normal"
            error={!!errors.username}
            helperText={errors.username}
            id="username"
          />
          <TextField
            name="password"
            label="Password"
            type="password"
            variant="outlined"
            value={formData.password}
            onChange={handleChange}
            fullWidth
            margin="normal"
            error={!!errors.password}
            helperText={errors.password}
            id="password"
          />
          <Button type="submit" variant="contained" color="primary" fullWidth>
            Login
          </Button>
        </form>
      </Box>
    </Container>
  );
};

export default Login;
