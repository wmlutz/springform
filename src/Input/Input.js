import React from 'react';

export default Input = ({seed, value, handleItemUpdate}) => {
  const {name, label} = seed
  return (
    <input
      label={label}
      name={name}
      value={value}
      onChange={event => console.log('event', event)}
    />

  )
}