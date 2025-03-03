// frontend/src/components/NavBar.jsx

import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Tabs,
  Tab,
  Box,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
  Divider
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom



export default function NavBar() {
  const [value, setValue] = React.useState(0);
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  // Handle tab changes (desktop)
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  // Toggle drawer (mobile)
  const toggleDrawer = (open) => (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }
    setDrawerOpen(open);
  };

  // Detect small screens
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));

  // Nav links
  const navLinks = ['Home', 'Features', 'Pricing'];

  // Drawer content
  const drawerContent = (
    <Box
      sx={{ width: 220, p: 2 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {navLinks.map((text) => (
          <ListItem button key={text}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
        <Divider sx={{ my: 1 }} />
      </List>

      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, mt: 2 }}>
        <Button component={Link} to='/Auth/SignUp' variant="contained" color="secondary">
          Sign up
        </Button>
        <Button component={Link} to='/Auth/login' variant="contained" color="secondary">
          Login
        </Button>
      </Box>
    </Box>
  );

  return (
    <AppBar position="static">
      <Toolbar
        disableGutters
        sx={{
          minHeight: 64,
          position: 'relative',
        }}
      >
        {isSmallScreen ? (
          /* MOBILE LAYOUT */
          <>
            {/* Brand Centered */}
            <Typography
              variant="h5"
              sx={{
                position: 'absolute',
                left: '50%',
                top: '50%',
                transform: 'translate(-50%, -50%)',
                color: 'secondary.main',
                fontWeight: 'bold',
              }}
            >
              MCHostings
            </Typography>

            {/* Hamburger on the right */}
            <IconButton
              color="inherit"
              onClick={toggleDrawer(true)}
              sx={{
                position: 'absolute',
                right: '1rem',
                top: '50%',
                transform: 'translateY(-50%)',
              }}
            >
              <MenuIcon />
            </IconButton>

            {/* Drawer on the right */}
            <Drawer
              anchor="right"
              open={drawerOpen}
              onClose={toggleDrawer(false)}
            >
              {drawerContent}
            </Drawer>
          </>
        ) : (
          /* DESKTOP LAYOUT */
          <>
            {/* Brand pinned left */}
            <Typography
              variant="h5"
              sx={{
                position: 'absolute',
                left: '1rem',
                top: '50%',
                transform: 'translateY(-50%)',
                color: 'secondary.main',
                fontWeight: 'bold',
              }}
            >
              MCHostings
            </Typography>

            {/* Tabs center */}
            <Tabs
              value={value}
              onChange={handleChange}
              textColor="inherit"
              indicatorColor="secondary"
              sx={{
                position: 'absolute',
                left: '50%',
                top: '50%',
                transform: 'translate(-50%, -50%)',
              }}
            >
              {navLinks.map((label) => (
                <Tab key={label} label={label} />
              ))}
            </Tabs>

            {/* Sign In & Login pinned right */}
            <Box
              sx={{
                position: 'absolute',
                right: '1rem',
                top: '50%',
                transform: 'translateY(-50%)',
                display: 'flex',
                gap: 1,
              }}
            >
              <Button component={Link} to='/Auth/SignUp' variant="contained" color="secondary">
              Sign up
              </Button>
              <Button component={Link} to='/Auth/login' variant="contained" color="secondary">
                Login
              </Button>
            </Box>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
}
