import React, { useRef, useEffect } from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import NextBar from '../NextBar';
import FormHelperText from '@material-ui/core/FormHelperText';

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

const Input = ({index, handleChange, dispatch, setView, item, active}) => {
  const {name, label, helperText, options, value} = item
  const inputRef = useRef(null)

  useEffect( () => {
      let {offsetTop, clientHeight} = inputRef.current
      dispatch({type: 'update_loc', payload: {index: index + 1, offsetTop, clientHeight}})
    }, []
  )

  const classes = useStyles();

  const handleCheckChange = (valItem) => {
    let nextVal = value.includes(valItem) ? value.filter(y => y !== valItem) : [...value, valItem]
    handleChange(name, nextVal)
  }

  return (
    <div className={active ? classes.row : classes.disabledRow} ref={inputRef}>
      <Typography gutterBottom className={classes.question}>{label}</Typography>
      {options.map(x => <FormControlLabel
        key={x.key}
        disabled={!active}
        control={
          <Checkbox
            checked={value.includes(x.key)}
            onChange={() => handleCheckChange(x.key)}
            value={x.key}
            color="primary"
          />
        }
        label={x.text}
      />)}
      { !!helperText ? <FormHelperText>{helperText}</FormHelperText> : null }
      <NextBar setView={setView} index={index + 1}/>
    </div>
  )
}

export default Input