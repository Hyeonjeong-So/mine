import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      light: '#f9c8d9',
      main: '#f8bbd0',
      dark: '#ad8291',
      contrastText: '#fff',
    },
    secondary: {
      light: '#fffacf',
      main: '#fff9c4',
      dark: '#b2ae89',
      contrastText: '#000',
    },
  },
});

export default theme;
