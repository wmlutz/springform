import React, { useRef, useEffect } from 'react';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  row: {
    marginTop: theme.spacing(7),
    marginBottom: theme.spacing(7),
    paddingTop: theme.spacing(7),
    paddingBottom: theme.spacing(7),
  },
  question: {
    fontWeight: 300
  }
}));

const Input = ({seed, value, handleChange, index, dispatch}) => {
  const {name, label, helperText} = seed
  const classes = useStyles();
  const inputRef = useRef(null)

  useEffect(
    () => {
      let {offsetTop, clientHeight} = inputRef.current
      dispatch({type: 'update', payload: {index, offsetTop, clientHeight}})
    }, []
  )

  return (
    <div className={classes.row} ref={inputRef}>
      <Typography gutterBottom className={classes.question}>{label}</Typography>
      <TextField
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