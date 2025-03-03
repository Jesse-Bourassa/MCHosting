// frontend/src/components/Pricing.jsx

import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardActions,
  Button,
  List,
  ListItem,
  ListItemText
} from '@mui/material';

export default function Pricing() {
  return (
    <Box
      sx={{
        py: 6,
        backgroundColor: 'background.paper',
        color: 'text.primary'
      }}
    >
      <Container maxWidth="lg">
        {/* Main Heading */}
        <Typography variant="h3" align="center" gutterBottom>
          Pricing
        </Typography>
        {/* Subtitle */}
        <Typography variant="h6" align="center" paragraph>
          Flexible plans to suit servers of any size.
        </Typography>

        <Grid container spacing={4} sx={{ mt: 4 }}>
          {/* Basic Plan */}
          <Grid item xs={12} sm={4}>
            <Card
              sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                textAlign: 'center',
                alignItems: 'center',
                boxShadow: 3,
                p: 2,
                transition: 'transform 0.3s, box-shadow 0.3s',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: 7
                }
              }}
            >
              <CardContent>
                <Typography variant="h5" gutterBottom>
                  Basic
                </Typography>
                {/* Short Tagline */}
                <Typography variant="body2" sx={{ fontStyle: 'italic', mb: 1 }}>
                  Perfect for small servers
                </Typography>

                {/* Price */}
                <Typography variant="h6" color="secondary" gutterBottom>
                  $5/mo
                </Typography>

                {/* Feature List */}
                <List dense sx={{ textAlign: 'left', display: 'inline-block' }}>
                  <ListItem disablePadding>
                    <ListItemText primary="1 GB RAM" />
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemText primary="1 CPU Core" />
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemText primary="10 GB SSD" />
                  </ListItem>
                </List>
              </CardContent>
              <CardActions sx={{ mt: 'auto', width: '100%' }}>
                <Button variant="contained" color="secondary" fullWidth>
                  Choose Plan
                </Button>
              </CardActions>
            </Card>
          </Grid>

          {/* Standard Plan (Highlighted) */}
          <Grid item xs={12} sm={4}>
            <Card
              sx={{
                position: 'relative',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                textAlign: 'center',
                alignItems: 'center',
                boxShadow: 3,
                p: 2,
                border: '2px solid',
                borderColor: 'secondary.main', // highlight border
                backgroundColor: 'rgba(255,255,255,0.05)', // subtle highlight
                transition: 'transform 0.3s, box-shadow 0.3s',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: 7
                }
              }}
            >
              {/* "Most Popular" Badge */}
              <Box
                sx={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  px: 2,
                  py: 0.5,
                  backgroundColor: 'secondary.main',
                  color: '#fff',
                  borderRadius: '0 0 8px 0'
                }}
              >
                Most Popular
              </Box>

              <CardContent>
                <Typography variant="h5" gutterBottom>
                  Standard
                </Typography>
                {/* Short Tagline */}
                <Typography variant="body2" sx={{ fontStyle: 'italic', mb: 1 }}>
                  Great for mid-sized servers
                </Typography>

                {/* Price */}
                <Typography variant="h6" color="secondary" gutterBottom>
                  $10/mo
                </Typography>

                {/* Feature List */}
                <List dense sx={{ textAlign: 'left', display: 'inline-block' }}>
                  <ListItem disablePadding>
                    <ListItemText primary="2 GB RAM" />
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemText primary="2 CPU Cores" />
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemText primary="25 GB SSD" />
                  </ListItem>
                  <ListItem disablePadding>
                  <ListItemText primary="Modded Support" />
                  </ListItem>
                </List>
              </CardContent>
              <CardActions sx={{ mt: 'auto', width: '100%' }}>
                <Button variant="contained" color="secondary" fullWidth>
                  Choose Plan
                </Button>
              </CardActions>
            </Card>
          </Grid>

          {/* Premium Plan */}
          <Grid item xs={12} sm={4}>
            <Card
              sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                textAlign: 'center',
                alignItems: 'center',
                boxShadow: 3,
                p: 2,
                transition: 'transform 0.3s, box-shadow 0.3s',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: 7
                }
              }}
            >
              <CardContent>
                <Typography variant="h5" gutterBottom>
                  Premium
                </Typography>
                {/* Short Tagline */}
                <Typography variant="body2" sx={{ fontStyle: 'italic', mb: 1 }}>
                  Ideal for large communities
                </Typography>

                {/* Price */}
                <Typography variant="h6" color="secondary" gutterBottom>
                  $20/mo
                </Typography>

                {/* Feature List */}
                <List dense sx={{ textAlign: 'left', display: 'inline-block' }}>
                  <ListItem disablePadding>
                    <ListItemText primary="4 GB RAM" />
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemText primary="4 CPU Cores" />
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemText primary="50 GB SSD" />
                  </ListItem>
                  <ListItem disablePadding>
                  <ListItemText primary="Modded Support" />
                  </ListItem>
                </List>
              </CardContent>
              <CardActions sx={{ mt: 'auto', width: '100%' }}>
                <Button variant="contained" color="secondary" fullWidth>
                  Choose Plan
                </Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
