import { createMuiTheme } from '@material-ui/core/styles';

 const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#00a8e8",
      main: '#0371CD',
      dark: "#00171f"
    }, 
    secondary: {
      light: '#47ffe3',
      main: '#FFC11F',
      dark: "#00e0bf"
    },
    error: {
      light: '#f50000',
      main: '#FD232B',
      dark: '#a30000',
      contrastText: '#fff',
    },
  },
  typography: { useNextVariants: true },
});

export default theme;