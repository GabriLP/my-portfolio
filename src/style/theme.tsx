import { createTheme } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Palette {
    accent: Palette['primary'];
  }
  interface PaletteOptions {
    accent?: PaletteOptions['primary'];
  }
}

const theme = createTheme({
  palette: {
    primary: {
      main: '#4CAF50',
    },
    secondary: {
      main: '#2196F3',
    },
    error: {
      main: '#F44336',
    },
    background: {
      default: '#101010',
    },
    text: {
      primary: '#FFFFFF',
    },
    accent: {
      main: '#795548',
    },
  },
  typography: {
    fontFamily: 'PP Neue Machina, sans-serif',
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        a {
          color: inherit;
          text-decoration: none;
        }
      `,
    },
    MuiListItemButton: {
      styleOverrides: {
        root: {
          fontFamily: 'PP Neue Machina, sans-serif',
          '&:hover': {
            backgroundColor: '#e0e0e0', 
          },
        },
      },
    },
  },
  spacing: 8,
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
});

export default theme;
