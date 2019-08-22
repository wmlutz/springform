import React from 'react';

const Input = ({seed, value, handleItemUpdate}) => {
  const {name, label} = seed
  return (
    <>
      <label htmlFor={label}>{label}</label>  
      <input
        name={name}
        value={value}
        onChange={event => console.log('event', event)}
      />
    </>
  )
}

export default Input