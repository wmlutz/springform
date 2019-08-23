import React from 'react';
import TextField from '@material-ui/core/TextField';

const Input = ({seed, value, handleChange}) => {
  const {name, label, helperText} = seed
  return <TextField
    id={label}
    label={label}
    style={{ margin: 8 }}
    fullWidth
    value={value}
    onChange={event => handleChange(name, event.target.value)}
    margin="normal"
    helperText={helperText}
  />
}

export default Input