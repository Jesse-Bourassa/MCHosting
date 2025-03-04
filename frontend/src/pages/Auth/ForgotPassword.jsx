import React, { useState } from 'react';
import { TextField, Button, Container, Typography, Box, Link, Divider } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

export default function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setMessage('');

    try {
      const response = await fetch('http://localhost:3001/auth/forgot-password', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email })
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message || 'Failed to send reset email');
      }

      setMessage('Password reset instructions sent to your email.');
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
        <Typography variant="h4" gutterBottom>Forgot Password</Typography>
        <Typography variant="body2" gutterBottom>
          Enter your email address and we'll send you instructions to reset your password.
        </Typography>
        {error && <Typography color="error">{error}</Typography>}
        {message && <Typography color="success.main">{message}</Typography>}
        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label="Email"
            name="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            margin="normal"
            required
            InputProps={{ style: { color: 'white' } }}
            InputLabelProps={{ style: { color: 'gray' } }}
          />
          <Button type="submit" variant="contained" fullWidth sx={{ mt: 2, backgroundColor: '#FDD835', color: '#000' }}>
            Send Reset Link
          </Button>
        </form>
        <Box sx={{ mt: 2 }}>
          <Divider sx={{ backgroundColor: 'gray', mb: 2 }} />
          <Typography variant="body2" sx={{ color: 'gray' }}>
            Remember your password? <Link component={RouterLink} to="/Auth/login" variant="body2" sx={{ color: '#FDD835' }}>Sign In</Link>
          </Typography>
        </Box>
      </Box>
    </Container>
  );
}
