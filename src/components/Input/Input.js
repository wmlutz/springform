import React, { useRef, useEffect } from 'react';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import NextBar from '../NextBar';

const useStyles = makeStyles(theme => ({
  row: {
    marginTop: theme.spacing(7),
    marginBottom: theme.spacing(7),
    paddingTop: theme.spacing(7),
    paddingBottom: theme.spacing(7),
    opacity: 1,
  },
  disabledRow: {
    marginTop: theme.spacing(7),
    marginBottom: theme.spacing(7),
    paddingTop: theme.spacing(7),
    paddingBottom: theme.spacing(7),
    opacity: 0.2,
  },
  question: {
    fontWeight: 300
  },
}));

const Input = ({index, handleChange, dispatch, active, setView, item}) => {
  const {name, label, helperText, value} = item
  const inputRef = useRef(null)

  useEffect(
    () => {
      let {offsetTop, clientHeight} = inputRef.current
      dispatch({type: 'update_loc', payload: {index: index + 1, offsetTop, clientHeight}})
    }, []
  )

  const classes = useStyles();

  return (
    <div className={active ? classes.row : classes.disabledRow} ref={inputRef}>
      <Typography gutterBottom className={classes.question}>{label}</Typography>
      <TextField
        disabled={!active}
        id={label}
        fullWidth
        value={value}
        onChange={event => handleChange(name, event.target.value)}
        margin="normal"
        helperText={helperText}
      />
      <NextBar setView={setView} index={index + 1}/>
    </div>
  )
}

export default Input