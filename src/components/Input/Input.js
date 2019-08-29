import React, { useRef, useEffect } from 'react';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import NextBar from '../NextBar';

const Input = ({seed, value, handleChange, index, dispatch, viewState, setView}) => {
  const {name, label, helperText} = seed
  const inputRef = useRef(null)

  useEffect(
    () => {
      let {offsetTop, clientHeight} = inputRef.current
      dispatch({type: 'update', payload: {index: index + 1, offsetTop, clientHeight}})
    }, []
  )

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

  const classes = useStyles();

  let active = (viewState === index + 1)

  return (
    <div className={active ? classes.row : classes.disabledRow} ref={inputRef}>
      <Typography gutterBottom className={classes.question}>{label}</Typography>
      <TextField
        disabled={viewState !== index + 1}
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