import React, { useState } from 'react';
import { TextField, Button, Container, Typography, Box, Checkbox, FormControlLabel, Link,Divider } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { Link as RouterLink } from 'react-router-dom';


export default function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({ ...formData, [name]: type === 'checkbox' ? checked : value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const response = await fetch('http://localhost:3001/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: formData.email, password: formData.password })
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message || 'Login failed');
      }

      alert('Login successful!');
      localStorage.setItem('token', data.token);
      navigate('/') // Redirect to a protected route
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
        <Typography variant="h4" gutterBottom>Login</Typography>
        <Typography variant="body2" gutterBottom>
          Welcome user, please Login to continue
        </Typography>
        {error && <Typography color="error">{error}</Typography>}
        <form onSubmit={handleSubmit}>
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
          <FormControlLabel
            control={
              <Checkbox
                name="rememberMe"
                checked={formData.rememberMe}
                onChange={handleChange}
                sx={{ color: 'white' }}
              />
            }
            label={<Typography sx={{ color: 'white' }}>Remember Me</Typography>}
          />
          <Button type="submit" variant="contained" fullWidth sx={{ mt: 2, backgroundColor: '#FDD835', color: '#000' }}>
            Sign In
          </Button>
          
        </form>
        <Box sx={{ mt: 2 }}>
        <Divider sx={{  mb: 2 }} />
          <Typography variant="body2">
            Don't have an account? <Link component={RouterLink} to="/Auth/signup" variant="body2" sx={{ color: '#FDD835' }}>Sign Up</Link>
          </Typography>
          <Link component={RouterLink} to="/Auth/ForgotPassword" variant="body2" sx={{ color: '#FDD835', display: 'block', mt: 1 }}>
            Forgot password?
          </Link>
        </Box>
        <Button onClick={() => navigate('/')} sx={{ mt: 2, color: '#FDD835' }}>
          Back
        </Button>
      </Box>
    </Container>
  );
}