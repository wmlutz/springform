import React from 'react';

const Input = ({seed, value, handleChange}) => {
  const {name, label} = seed
  return (
    <>
      <label htmlFor={label}>{label}</label>  
      <input
        name={name}
        value={value}
        onChange={event => handleChange(name, event.target.value)}
      />
    </>
  )
}

export default Input