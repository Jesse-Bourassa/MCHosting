import React, { useEffect, useState, useMemo, useContext  } from 'react';
import {
  AppBar, Toolbar, Typography, Tabs, Tab, Box, Button, IconButton, Drawer,
  List, ListItem, ListItemText, useMediaQuery, Divider
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import AuthContext from "../context/AuthContext"; // ✅ Import Auth Context


export default function NavBar() {
  const { isAuthenticated, logout } = useContext(AuthContext); // ✅ Get auth state
  const location = useLocation();
  const navigate = useNavigate();
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));

  // Use useMemo to avoid unnecessary re-renders
  const tabRoutes = useMemo(() => ["/", "/pricing", "/contact"], []);

  const [tabIndex, setTabIndex] = useState(0);

  // Ensure tab indicator updates correctly when navigating
  useEffect(() => {
    const index = tabRoutes.indexOf(location.pathname);
    setTabIndex(index !== -1 ? index : false);
  }, [location.pathname, tabRoutes]); // ✅ Include tabRoutes in the dependency array

  const [drawerOpen, setDrawerOpen] = useState(false);

  // Toggle drawer (mobile)
  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
  };

  // Handle Logout
  const handleLogout = () => {
    localStorage.removeItem('token'); // Remove token from storage
    logout(); // Update auth state
    navigate('/'); // Redirect to home
  };

  // Define navigation links dynamically based on authentication state
  const navLinks = isAuthenticated
    ? ['Home', 'Dashboard', 'My Servers', 'Billing']
    : ['Home', 'Pricing', 'Contact'];

  // Drawer content for mobile view
  const drawerContent = (
    <Box sx={{ width: 220, p: 2 }} role="presentation" onClick={toggleDrawer(false)} onKeyDown={toggleDrawer(false)}>
      <List>
        {navLinks.map((text) => (
          <ListItem button key={text}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
        <Divider sx={{ my: 1 }} />
      </List>

      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, mt: 2 }}>
        {!isAuthenticated ? (
          <>
            <Button component={Link} to='/Auth/SignUp' variant="contained" color="secondary">
              Sign up
            </Button>
            <Button component={Link} to='/Auth/Login' variant="contained" color="secondary">
              Login
            </Button>
          </>
        ) : (
          <Button onClick={handleLogout} variant="contained" color="secondary">
            Logout
          </Button>
        )}
      </Box>
    </Box>
  );

  return (
    <AppBar position="static">
      <Toolbar disableGutters sx={{ minHeight: 64, position: 'relative' }}>
        {isSmallScreen ? (
          <>
            <Typography variant="h5" sx={{ position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%, -50%)', color: 'secondary.main', fontWeight: 'bold' }}>
              MCHostings
            </Typography>

            <IconButton color="inherit" onClick={toggleDrawer(true)} sx={{ position: 'absolute', right: '1rem', top: '50%', transform: 'translateY(-50%)' }}>
              <MenuIcon />
            </IconButton>

            <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
              {drawerContent}
            </Drawer>
          </>
        ) : (
          <>
            <Typography variant="h5" sx={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: 'secondary.main', fontWeight: 'bold' }}>
              MCHostings
            </Typography>

            {/* Tabs with dynamic value */}
            <Tabs
              value={tabIndex}
              textColor="inherit"
              indicatorColor="secondary"
              sx={{
                position: "absolute",
                left: "50%",
                top: "50%",
                transform: "translate(-50%, -50%)",
                transition: "all 0.3s ease-in-out", // Smooth transition
              }}
            >
              <Tab label="Home" component={Link} to="/" />
              <Tab label="Pricing" component={Link} to="/pricing" />
              <Tab label="Contact" component={Link} to="/contact" />
            </Tabs>

            <Box sx={{ position: 'absolute', right: '1rem', top: '50%', transform: 'translateY(-50%)', display: 'flex', gap: 1 }}>
              {!isAuthenticated ? (
                <>
                  <Button component={Link} to='/Auth/SignUp' variant="contained" color="secondary">
                    Sign up
                  </Button>
                  <Button component={Link} to='/Auth/Login' variant="contained" color="secondary">
                    Login
                  </Button>
                </>
              ) : (
                <Button onClick={handleLogout} variant="contained" color="secondary">
                  Logout
                </Button>
              )}
            </Box>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
}
