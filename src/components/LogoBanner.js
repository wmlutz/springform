import React, {useEffect, useRef} from 'react';
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

const LogoBanner = ({setSpecificView, dispatch}) => {
  const classes = useStyles();
  const logoRef = useRef(null)
  
  useEffect(
    () => {
      let {offsetTop, clientHeight} = logoRef.current
      dispatch({type: 'update', payload: {index: 0, offsetTop, clientHeight}})
    }, []
  )

  return <div className={classes.container} ref={logoRef}>
    <span>Logo here</span>
    <Button variant="contained" color="primary" onClick={() => setSpecificView(1)}>
      Get Started
    </Button>
  </div>
}

export default LogoBanner