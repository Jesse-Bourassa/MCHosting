import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import Home from './pages/Home';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './theme'; 
import SignUp from './pages/Auth/SignUp';
import Login from './pages/Auth/Login';
import ForgotPassword from './pages/Auth/ForgotPassword';
import Pricing from './pages/Pricing';
import Dashboard from './pages/Dashboard';
import Myserver from './pages/myserver';
import Billing from './pages/Billings';
import NavBar from "../src/components/NavBar";
import { AuthProvider } from './context/AuthContext';

function App() {
  return (
    <AuthProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router>
          <NavBar /> {/* ✅ NavBar now correctly updates with context */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Auth/SignUp" element={<SignUp />} />
            <Route path="/Auth/Login" element={<Login />} />
            <Route path="/Auth/ForgotPassword" element={<ForgotPassword />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/myservers" element={<Myserver />} />
            <Route path="/billing" element={<Billing />} />
            
          </Routes>
        </Router>
      </ThemeProvider>
    </AuthProvider>
  );
}

export default App;
