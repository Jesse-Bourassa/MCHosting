import React from 'react';
import { Box, Container, Typography, Grid, Card, CardContent, Avatar } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PaymentIcon from '@mui/icons-material/Payment';
import BuildIcon from '@mui/icons-material/Build';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';

export default function HowItWorks() {
  const steps = [
    {
      icon: <AccountCircleIcon fontSize="large" />,
      title: 'Sign Up',
      description: 'Create your free account in seconds.'
    },
    {
      icon: <PaymentIcon fontSize="large" />,
      title: 'Choose a Plan',
      description: 'Pick the plan that suits your server needs and budget.'
    },
    {
      icon: <BuildIcon fontSize="large" />,
      title: 'Configure Mods',
      description: 'Add your favorite mods and plugins with a few clicks.'
    },
    {
      icon: <PlayCircleOutlineIcon fontSize="large" />,
      title: 'Launch & Play',
      description: 'Start your server instantly and invite your friends!'
    }
  ];

  return (
    <Box
      sx={{
        py: 6,
        backgroundColor: 'background.paper',
        color: 'text.primary',
      }}
    >
      <Container maxWidth="lg">
        <Typography variant="h3" align="center" gutterBottom>
          How It Works
        </Typography>
        <Typography variant="h6" align="center" paragraph>
          Getting started is easy—follow these simple steps.
        </Typography>

        <Grid container spacing={4} sx={{ mt: 4 }}>
          {steps.map((step, index) => (
            <Grid item xs={12} sm={3} key={index}>
              <Card
                sx={{
                  textAlign: 'center',
                  p: 2,
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  transition: 'transform 0.3s, box-shadow 0.3s',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: 3
                  }
                }}
              >
                <CardContent>
                  <Avatar
                    sx={{
                      bgcolor: 'secondary.main',
                      width: 56,
                      height: 56,
                      mb: 2,
                      mx: 'auto'
                    }}
                  >
                    {step.icon}
                  </Avatar>
                  <Typography variant="h5" gutterBottom>
                    {step.title}
                  </Typography>
                  <Typography variant="body2" paragraph>
                    {step.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}