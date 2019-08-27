import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  container: {
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column'
  }
}));

const LogoBanner = ({setSpecificView}) => {
  const classes = useStyles();
  
  return <div className={classes.container}>
    <span>Logo here</span>
    <Button variant="contained" color="primary" onClick={() => setSpecificView(0)}>
      Get Started
    </Button>
  </div>
}

export default LogoBanner