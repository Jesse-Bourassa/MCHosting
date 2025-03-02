// theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#2E7D32', // A deep green reminiscent of Minecraft's natural vibe
    },
    secondary: {
      main: '#FDD835', // A gold accent color for buttons and highlights
    },
    background: {
      default: '#121212', // Very dark background
      paper: '#1E1E1E',   // Slightly lighter for cards/sections
    },
    text: {
      primary: '#FFFFFF', // White text for strong contrast
      secondary: '#BBBBBB' // Lighter gray for subtitles or less important text
    }
  },
});

export default theme;
