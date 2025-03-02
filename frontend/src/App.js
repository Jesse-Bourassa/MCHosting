import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider} from '@mui/material/styles';
import Home from './pages/Home';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './theme'; // Import your custom theme


function App() {
  return (
    <ThemeProvider theme={theme}>
       <CssBaseline />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Add more routes here, e.g. /register, /login */}
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
