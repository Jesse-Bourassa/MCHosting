import React, { useState } from 'react';
import {
  Box,
  Container,
  Paper,
  Stack,
  Typography,
  Button,
  Divider,
  TextField,
  FormControlLabel,
  Checkbox,
} from '@mui/material';

export default function SignInPage() {
  // Local state for email, password, and remember me
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Sign in with email/password', { email, password, rememberMe });
    // Call your API here
  };

  return (
    <Container
      maxWidth="sm"
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Paper
        elevation={3}
        sx={{
          p: 4,
          width: '100%',
          borderRadius: 2,
          backgroundColor: 'background.paper',
        }}
      >
        <Typography variant="h5" align="center" sx={{ mb: 1, color: 'text.primary' }}>
          Sign In
        </Typography>
        <Typography variant="body2" align="center" sx={{ color: 'text.secondary', mb: 2 }}>
          Welcome user, please sign in to continue
        </Typography>

        {/* Divider with "OR" */}
        <Stack direction="row" alignItems="center" spacing={1} sx={{ my: 2 }}>
          <Divider sx={{ flex: 1 }} />
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Enter your credentials
          </Typography>
          <Divider sx={{ flex: 1 }} />
        </Stack>

        {/* Email/Password Form */}
        <Box component="form" onSubmit={handleSubmit} noValidate>
          <Stack spacing={2}>
            <TextField
              label="Email"
              type="email"
              autoComplete="email"
              required
              fullWidth
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              InputProps={{
                sx: {
                  backgroundColor: 'background.default',
                  borderRadius: 1,
                  input: { color: 'text.primary' },
                },
              }}
              InputLabelProps={{
                sx: { color: 'text.secondary' },
              }}
            />
            <TextField
              label="Password"
              type="password"
              autoComplete="current-password"
              required
              fullWidth
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              InputProps={{
                sx: {
                  backgroundColor: 'background.default',
                  borderRadius: 1,
                  input: { color: 'text.primary' },
                },
              }}
              InputLabelProps={{
                sx: { color: 'text.secondary' },
              }}
            />

            <FormControlLabel
              control={
                <Checkbox
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  color="secondary"
                />
              }
              label="Remember Me"
              sx={{ color: 'text.secondary' }}
            />

            <Button
              type="submit"
              variant="contained"
              color="primary"
              sx={{
                mt: 1,
                textTransform: 'none',
                fontSize: '1rem',
              }}
            >
              Sign In
            </Button>
          </Stack>
        </Box>
      </Paper>
    </Container>
  );
}
