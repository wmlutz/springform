import 'typeface-roboto';
import React, { useState } from 'react';
import Input from './Input';
import PropTypes from 'prop-types';

const SpringForm = ({formArr, onSubmit}) => {
  if (formArr.length < 1) { return <div>Oops, no form input array.</div>}
  const initState = formArr.map(el => {
    return({
      [el.name]: initialStateFinder(el.type)
    })
  })

  const [formState, setFormState] = useState(initState);

  const handleItemUpdate = (name, data) => {
    setFormState([...formState, {[name]: data}])
  }

  const componentFinder = (item, i) => {
    switch (item.type) {
      case 'input': return <Input key={i} seed={item} value={formState[item.name]} handleItemUpdate={handleItemUpdate}/>;
      default: return null;
    } 
  }

  let inside = formArr.map((item, i) => componentFinder(item, i))

  return (
    <>
      <p>Input is {input}</p>
      {inside}
    </>
  )
}

const initialStateFinder = (type) => {
  switch (type) {
    case 'input': return "";
    default: return null;
  } 
}

SpringForm.propTypes ={
  formArr: PropTypes.arrayOf(PropTypes.shape({
    type: PropTypes.string,
    name: PropTypes.string,
  })).isRequired,
  onSubmit: PropTypes.func
}

SpringForm.defaultProps = {
  formArr: [],
  onSubmit: () => console.log('submit')
};

export default SpringForm