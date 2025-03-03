import React from 'react';
import { Box, Typography, Button } from '@mui/material';

export default function GlassHero() {
  return (
    <Box
      sx={{
        position: 'relative',
        height: '40vh',  // or however tall you want your hero
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'text.primary',
        // Parallax background
        backgroundImage: 'url("MMC.jpg")', // replace with your image path
        backgroundAttachment: 'fixed',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        textAlign: 'center',
        // A subtle overlay if you want to darken the image
        '&:before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.5)', // dark overlay
          zIndex: 1,
        },
      }}
    >
      {/* Foreground Content */}
      <Box
        sx={{
          position: 'relative',
          zIndex: 2, // ensure text is above the overlay
          maxWidth: '600px', // optional max-width for text
          mx: 2,             // side padding
        }}
      >
        <Typography variant="h3" gutterBottom>
          Welcome to My Minecraft Hosting Service
        </Typography>
        <Typography variant="h6" paragraph>
          Experience reliable, scalable, and affordable Minecraft server hosting
          tailored to your needs.
        </Typography>
        <Button variant="contained" color="secondary" size="large">
          Get Started
        </Button>
      </Box>
    </Box>
  );
}