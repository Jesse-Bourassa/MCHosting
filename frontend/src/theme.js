// theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#2E7D32',
    },
    secondary: {
      main: '#FDD835',
    },
    background: {
      default: '#1E1E1E',
      paper: '#1E1E1E',
    },
    text: {
      primary: '#FFFFFF',
      secondary: '#BBBBBB'
    }
  },
});

export default theme;