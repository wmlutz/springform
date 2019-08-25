import React from 'react';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
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

const Input = ({seed, value, handleChange}) => {
  const {name, label, helperText} = seed
  const classes = useStyles();
  return (
    <div className={classes.row}>
      <Typography gutterBottom className={classes.question}>{label}</Typography>
      <TextField
        id={label}
        fullWidth
        value={value}
        onChange={event => handleChange(name, event.target.value)}
        margin="normal"
        helperText={helperText}
      />
    </div>
  )
}

export default Input