import React, { useState } from 'react';
import { TextField, Button, Container, Typography, Box, Link, Divider } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { Link as RouterLink } from 'react-router-dom';


export default function SignUp() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const response = await fetch('http://localhost:3001/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message || 'Registration failed');
      }

      alert('Registration successful! You can now log in.');
      navigate('/login');
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <Container maxWidth="xs" sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <Box
        sx={{
          p: 4,
          boxShadow: 3,
          borderRadius: 2,
          textAlign: 'center',
          backgroundColor: '#1e1e1e',
          color: '#ffffff',
          width: '100%',
          maxWidth: 400
        }}
      >
        <Typography variant="h4" gutterBottom>Sign Up</Typography>
        <Typography variant="body2" gutterBottom>
          Create an account to get started
        </Typography>
        {error && <Typography color="error">{error}</Typography>}
        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label="Username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            margin="normal"
            required
            InputProps={{ style: { color: 'white' } }}
            InputLabelProps={{ style: { color: 'gray' } }}
          />
          <TextField
            fullWidth
            label="Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            margin="normal"
            required
            InputProps={{ style: { color: 'white' } }}
            InputLabelProps={{ style: { color: 'gray' } }}
          />
          <TextField
            fullWidth
            label="Password"
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            margin="normal"
            required
            InputProps={{ style: { color: 'white' } }}
            InputLabelProps={{ style: { color: 'gray' } }}
          />
          <Button type="submit" variant="contained" fullWidth sx={{ mt: 2, backgroundColor: '#FDD835', color: '#000' }}>
            Sign Up
          </Button>
        </form>
        <Box sx={{ mt: 2 }}>
          <Divider sx={{ mb: 2 }} />
          <Typography variant="body2">
            Already have an account? <Link component={RouterLink} to="/Auth/login" variant="body2" sx={{ color: '#FDD835' }}>Sign In</Link>
          </Typography>
        </Box>
        <Button onClick={() => navigate('/')} sx={{ mt: 2, color: '#FDD835' }}>
          Back
        </Button>
      </Box>
    </Container>
  );
}
