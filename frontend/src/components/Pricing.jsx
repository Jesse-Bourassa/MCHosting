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
  Button
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
        <Typography variant="h4" align="center" gutterBottom>
          Pricing
        </Typography>
        <Typography variant="subtitle1" align="center" paragraph>
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
                p: 2,
                transition: 'transform 0.3s, box-shadow 0.3s',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: 3
                }
              }}
            >
              <CardContent>
                <Typography variant="h5" gutterBottom>
                  Basic
                </Typography>
                <Typography variant="h6" color="secondary" gutterBottom>
                  $5/mo
                </Typography>
                <Typography variant="body2" paragraph>
                  - 1 GB RAM<br />
                  - 1 CPU Core<br />
                  - 10 GB SSD
                </Typography>
              </CardContent>
              <CardActions sx={{ mt: 'auto', width: '100%' }}>
                <Button variant="contained" color="secondary" fullWidth>
                  Choose Plan
                </Button>
              </CardActions>
            </Card>
          </Grid>

          {/* Standard Plan */}
          <Grid item xs={12} sm={4}>
            
            <Card
              sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                textAlign: 'center',
                alignItems: 'center',
                p: 2,
                transition: 'transform 0.3s, box-shadow 0.3s',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: 3
                }
              }}
            >
              <CardContent>
                <Typography variant="h5" gutterBottom>
                  Standard
                </Typography>
                <Typography variant="h6" color="secondary" gutterBottom>
                  $10/mo
                </Typography>
                <Typography variant="body2" paragraph>
                  - 2 GB RAM<br />
                  - 2 CPU Cores<br />
                  - 25 GB SSD
                </Typography>
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
                p: 2,
                transition: 'transform 0.3s, box-shadow 0.3s',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: 3
                }
              }}
            >
              <CardContent>
                <Typography variant="h5" gutterBottom>
                  Premium
                </Typography>
                <Typography variant="h6" color="secondary" gutterBottom>
                  $20/mo
                </Typography>
                <Typography variant="body2" paragraph>
                  - 4 GB RAM<br />
                  - 4 CPU Cores<br />
                  - 50 GB SSD
                </Typography>
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
