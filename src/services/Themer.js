import React from 'react';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import blue from '@material-ui/core/colors/blue';
import colorfinder from './colorfinder';

const Themer =  ({children, baseColor}) => {
  let color = colorfinder(baseColor);

  let theme = createMuiTheme({
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
        color: color[900]
      }
    },
    palette: {
      primary: {
        main: color[900]
      },
      secondary: {
        main: blue[800],
      }
    },
    overrides: {
      MuiTextField: {
        root: {
          '& .MuiInput-underline:before': {
            borderBottom: `2px solid ${color[900]}`,
          },
          '& .MuiInput-underline:during': {
            borderBottom: `2px solid ${color[900]}`,
          },
        }
      },
      MuiFormHelperText: {
        root: {
          color: color[900],
        }
      },
      MuiButton: {
        root: {
          fontWeight: 300
        }
      }
    }
  });


  return <ThemeProvider theme={theme}>
    {children}
  </ThemeProvider>
}

Themer.defaultProps = {
  baseColor: 'red',
};

export default Themer