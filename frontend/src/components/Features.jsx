// frontend/src/components/Features.jsx
import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent
} from '@mui/material';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import BarChartIcon from '@mui/icons-material/BarChart';
import HeadsetMicIcon from '@mui/icons-material/HeadsetMic';

export default function Features() {
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
          Features
        </Typography>
        <Typography variant="subtitle1" align="center" paragraph>
          Everything you need to build an epic Minecraft server.
        </Typography>

        <Grid container spacing={4} sx={{ mt: 4 }}>
          {/* Easy Setup */}
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
                <RocketLaunchIcon sx={{ fontSize: 48, mb: 2 }} />
                <Typography variant="h5" gutterBottom>
                  Easy Setup
                </Typography>
                <Typography variant="body2">
                  Launch your server with a single click.
                  No complicated setup required.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          {/* Scalable Performance */}
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
                <BarChartIcon sx={{ fontSize: 48, mb: 2 }} />
                <Typography variant="h5" gutterBottom>
                  Scalable Performance
                </Typography>
                <Typography variant="body2">
                  Upgrade or downgrade resources on the fly 
                  to match your server’s needs.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          {/* 24/7 Support */}
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
                <HeadsetMicIcon sx={{ fontSize: 48, mb: 2 }} />
                <Typography variant="h5" gutterBottom>
                  24/7 Support
                </Typography>
                <Typography variant="body2">
                  Our support team is available around the clock 
                  to help you out.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
