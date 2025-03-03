import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider} from '@mui/material/styles';
import Home from './pages/Home';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './theme'; // Import your custom theme
import SignUp from './pages/Auth/SignUp';
import Login from './pages/Auth/Login';
import ForgotPassword from './pages/Auth/ForgotPassword';



function App() {
  return (
    <ThemeProvider theme={theme}>
       <CssBaseline />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Auth/SignUp" element={<SignUp />} />
          <Route path="/Auth/login" element={<Login />} />
          <Route path="/Auth/ForgotPassword" element={<ForgotPassword />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
