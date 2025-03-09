import React from 'react';
import { Box, Typography} from '@mui/material';

export default function Pricing() {
  return (
    <>
    <Box sx={{ minHeight: "100vh", bgcolor: "black", color: "white", py: 6, px: 3 }}>
      <Typography variant="h3" align="center" sx={{ fontWeight: "bold", mb: 4 }}>
        Billings
      </Typography>
      <Typography variant="h6" align="center" sx={{ mb: 6 }}>
        Test
      </Typography>
    </Box>
    </>
  );
}
