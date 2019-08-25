import React from 'react';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

const Themer = ({children, primary, secondary, error}) => {
  const theme = createMuiTheme({
    typography: {
      fontSize: 18,
      fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
      ].join(','),
      body1: {
        color: primary
      }
    },
    palette: {
      primary: {
        main: primary,
      },
      secondary: {
        main: secondary,
      },
      error: {
        main: error
      }
    },
    overrides: {
      MuiTextField: {
        root: {
          '& .MuiInput-underline:before': {
            borderBottom: `2px solid ${primary}`,
          },
          '& .MuiInput-underline:during': {
            borderBottom: `2px solid ${primary}`,
          },
        }
      },
    }
  });

  return <ThemeProvider theme={theme}>
    {children}
  </ThemeProvider>
}

Themer.defaultProps = {
  primary: '#ab0b00',
  secondary: '#0c007d',
  error: '#ff1500'
};

export default Themer