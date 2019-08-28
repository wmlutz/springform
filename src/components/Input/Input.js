import React, { useRef, useEffect } from 'react';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import red from '@material-ui/core/colors/red';

const useStyles = makeStyles(theme => ({
  row: {
    marginTop: theme.spacing(7),
    marginBottom: theme.spacing(7),
    paddingTop: theme.spacing(7),
    paddingBottom: theme.spacing(7),
  },
  question: {
    fontWeight: 300
  },
  disabled: {
    fontWeight: 300,
    color: red[100]
  }
}));

const Input = ({seed, value, handleChange, index, dispatch, viewState}) => {
  const {name, label, helperText} = seed
  const classes = useStyles();
  const inputRef = useRef(null)

  useEffect(
    () => {
      let {offsetTop, clientHeight} = inputRef.current
      dispatch({type: 'update', payload: {index: index + 1, offsetTop, clientHeight}})
    }, []
  )

  let active = (viewState === index + 1)

  return (
    <div className={classes.row} ref={inputRef}>
      <Typography gutterBottom className={active ? classes.question : classes.disabled}>{label}</Typography>
      <TextField
        disabled={viewState !== index + 1}
        id={label}
        fullWidth
        value={value}
        onChange={event => handleChange(name, event.target.value)}
        margin="normal"
        helperText={helperText}
      />
      <span style={{textAlign: "right"}}>
        <Button 
          color="primary" 
          onClick={() => prevView()}
          size="small">
          Previous
        </Button>
        <Button 
          color="primary" 
          onClick={() => nextView()}
          size="small">
          Next
        </Button>
      </span>
    </div>
  )
}

export default Input