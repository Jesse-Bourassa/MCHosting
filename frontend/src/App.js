import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider} from '@mui/material/styles';
import Home from './pages/Home';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './theme'; // Import your custom theme
import SignInPage from './pages/SignIn'; // Import the sign-in page


function App() {
  return (
    <ThemeProvider theme={theme}>
       <CssBaseline />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<SignInPage />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
