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
    // Default fontFamily is for body text
    fontFamily: 'Inter, sans-serif', 

    // Customization for headings using Anton
    h1: {
      fontFamily: 'Anton, sans-serif',
      fontWeight: 400, 
      fontSize: 'clamp(5rem, 9vw, 8rem)',
    },
    h2: {
      fontFamily: 'Anton, sans-serif',
      fontWeight: 400, 
      fontSize: 'clamp(4rem, 8vw, 7rem)',
    },
    h3: {
      fontFamily: 'Anton, sans-serif',
      fontWeight: 400,
      fontSize: 'clamp(3rem, 7vw, 6rem)',
    },
    h4: {
      fontFamily: 'Anton, sans-serif',
      fontWeight: 400,
      fontSize: 'clamp(2rem, 6vw, 5rem)',
    },
    h5: {
      fontFamily: 'Anton, sans-serif',
      fontWeight: 400,
      fontSize: 'clamp(1.5rem, 5vw, 3rem)',
    },
    body1: {
      fontWeight: 300,
      fontSize: 'clamp(0.85rem, 2vw, 1.25rem)',
    },
    body2: {
      fontWeight: 300,
      fontSize: 'clamp(0.6rem, 2vw, 0.875rem)',
    },
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
          fontFamily: 'Inter, sans-serif',
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
