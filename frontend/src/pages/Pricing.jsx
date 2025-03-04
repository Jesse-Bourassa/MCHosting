import React from 'react';
import { Box, Typography, Grid, Card, CardContent, Button } from '@mui/material';
import NavBar from '../components/NavBar';

const pricingPlans = [
  {
    name: "Basic",
    price: "$5/mo",
    specs: ["1 GB RAM", "1 CPU Core", "10 GB SSD"],
    buttonText: "Choose Plan",
  },
  {
    name: "Standard",
    price: "$10/mo",
    specs: ["2 GB RAM", "2 CPU Cores", "25 GB SSD", "Modded Support"],
    buttonText: "Most Popular",
    highlight: true, // Highlights the card
  },
  {
    name: "Premium",
    price: "$20/mo",
    specs: ["4 GB RAM", "4 CPU Cores", "50 GB SSD", "Modded Support"],
    buttonText: "Choose Plan",
  },
];

export default function Pricing() {
  return (
    <>
    <NavBar/>
    <Box sx={{ minHeight: "100vh", bgcolor: "black", color: "white", py: 6, px: 3 }}>
      <Typography variant="h3" align="center" sx={{ fontWeight: "bold", mb: 4 }}>
        Pricing Plans
      </Typography>
      <Typography variant="h6" align="center" sx={{ mb: 6 }}>
        Flexible plans to suit servers of any size.
      </Typography>

      <Grid container spacing={3} justifyContent="center">
        {pricingPlans.map((plan, index) => (
          <Grid item key={index} xs={12} sm={6} md={4}>
            <Card
              sx={{
                bgcolor: plan.highlight ? "rgba(255, 215, 0, 0.2)" : "grey.900",
                color: "white",
                textAlign: "center",
                border: plan.highlight ? "2px solid yellow" : "1px solid grey",
              }}
            >
              <CardContent>
                <Typography variant="h5" sx={{ fontWeight: "bold", mb: 2 }}>
                  {plan.name}
                </Typography>
                <Typography variant="h4" sx={{ color: "yellow", mb: 2 }}>
                  {plan.price}
                </Typography>

                <Box sx={{ mb: 2 }}>
                  {plan.specs.map((spec, i) => (
                    <Typography key={i} variant="body1" sx={{ mb: 1 }}>
                      {spec}
                    </Typography>
                  ))}
                </Box>

                <Button
                  variant="contained"
                  color="secondary"
                  sx={{
                    bgcolor: plan.highlight ? "yellow" : "secondary.main",
                    color: "black",
                    fontWeight: "bold",
                  }}
                >
                  {plan.buttonText}
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
    </>
  );
}
