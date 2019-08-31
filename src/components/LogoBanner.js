import React, {useEffect, useRef} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  container: {
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column'
  }
}));

const LogoBanner = ({setView, dispatch, logo, title}) => {
  const classes = useStyles();
  const logoRef = useRef(null)
  
  useEffect(
    () => {
      let {offsetTop, clientHeight} = logoRef.current
      dispatch({type: 'update_loc', payload: {index: 0, offsetTop, clientHeight}})
    }, []
  )

  return <div className={classes.container} ref={logoRef}>
    {/* {!!logo ? <img src={require(logo)} /> : null } */}
    {!!title ? <Typography gutterBottom>{title}</Typography> : null}
    <Button variant="contained" color="primary" onClick={() => setView(1)}>
      Get Started
    </Button>
  </div>
}

export default LogoBanner