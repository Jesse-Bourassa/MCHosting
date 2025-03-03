// frontend/src/pages/Home.jsx

import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import NavBar from '../components/NavBar';
import Features from '../components/Features';
import Pricing from '../components/Pricing';
import GlassHero from '../components/Hero';
import HowItWorks from '../components/HowItWorks';
import CustomDivider from '../components/CustomDivider';



export default function Home() {
  return (
    <>
      <NavBar />
      <GlassHero />
      <Features />
      <CustomDivider />
      <HowItWorks />
      <CustomDivider />
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
