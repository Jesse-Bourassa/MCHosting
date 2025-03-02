// frontend/src/pages/Home.jsx

import React from 'react';
import { Box, Container, Typography, Button } from '@mui/material';
import NavBar from '../components/NavBar';
import Features from '../components/Features';
import Pricing from '../components/Pricing';

export default function Home() {
  return (
    <>
      <NavBar />

      {/* Hero Section */}
      <Box
        sx={{
            py: 8,
            textAlign: 'center',
            backgroundColor: 'primary.main',  // Use the theme's primary color
            color: 'text.primary',            // Ensures text is readable
          }}
      >
        <Container maxWidth="md">
          <Typography variant="h3" gutterBottom>
            Welcome to My Minecraft Hosting Service
          </Typography>
          <Typography variant="h6" paragraph>
            Experience reliable, scalable, and affordable Minecraft server hosting
            tailored to your needs.
          </Typography>
          <Button variant="contained" color="secondary" size="large" sx={{ mt: 2 }}>
            Get Started
          </Button>
        </Container>
      </Box>

      <Features />

      <Pricing />

      {/* Footer */}
      <Box
        component="footer"
        sx={{
          py: 3,
          textAlign: 'center',
          backgroundColor: 'background.paper',
          color: 'text.primary'
        }}
      >
        <Container maxWidth="lg">
          <Typography variant="body2">
            &copy; {new Date().getFullYear()} MCHosting. All rights reserved.
          </Typography>
        </Container>
      </Box>
    </>
  );
}
