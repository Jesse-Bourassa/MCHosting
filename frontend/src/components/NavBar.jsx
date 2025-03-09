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

  const [tabIndex, setTabIndex] = useState(0);

  useEffect(() => {
    console.log("NavBar Rendered - Authenticated:", isAuthenticated);
  }, [isAuthenticated]); // ✅ Logs every time auth changes
  
  const tabRoutes = useMemo(() => 
    isAuthenticated
      ? ["/", "/pricing", "/dashboard", "/myservers", "/billing"]
      : ["/", "/pricing", "/contact"]
  , [isAuthenticated]);

  useEffect(() => {
  const foundIndex = tabRoutes.findIndex(route => route === location.pathname);

  if (foundIndex !== -1) {
    setTabIndex(foundIndex);
  } else {
    setTabIndex(0); // Default to Home
  }
}, [location.pathname, tabRoutes]);

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
  
  
  const navLinks = useMemo(() => 
    isAuthenticated
      ? [
          { label: "Home", path: "/" },
          { label: "Pricing", path: "/pricing" },
          { label: "Dashboard", path: "/dashboard" },
          { label: "My Servers", path: "/myservers" },
          { label: "Billing", path: "/billing" }
        ]
      : [
          { label: "Home", path: "/" },
          { label: "Pricing", path: "/pricing" },
          { label: "Contact", path: "/contact" }
        ]
  , [isAuthenticated]);

  // Drawer content for mobile view
  const drawerContent = (
    <Box sx={{ width: 220, p: 2 }} role="presentation" onClick={toggleDrawer(false)} onKeyDown={toggleDrawer(false)}>
      <List>
  {navLinks.map((link) => (
    <ListItem 
      button 
      key={link.path} 
      component={Link} 
      to={link.path}
      sx={{
        color: "white", // ✅ Match desktop color
        fontWeight: "bold", // ✅ Match desktop weight
        textTransform: "uppercase", // ✅ Match desktop text style
        "&:hover": { color: "#FDD835" }, // ✅ Match hover effect
        padding: "12px 16px", // ✅ Add padding for better spacing
        display: "flex",
        justifyContent: "center" // ✅ Center align text
      }}
    >
      <ListItemText 
        primary={link.label} 
        sx={{ textAlign: "center" }} // ✅ Center text inside the item
      />
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
  value={tabIndex >= 0 ? tabIndex : 0} // Prevents invalid values
  textColor="inherit"
  indicatorColor="secondary"
  sx={{
    position: "absolute",
    left: "50%",
    top: "50%",
    transform: "translate(-50%, -50%)",
    transition: "all 0.3s ease-in-out",
  }}
>
  {navLinks.map((link, index) => (
    <Tab key={index} label={link.label} component={Link} to={link.path} />
  ))}
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
