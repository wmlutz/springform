import React, { useState } from 'react';
import Input from './Input';
import PropTypes from 'prop-types';

function SpringForm({formArr}){
  // XXX Update when new types added
  let filterArr = formArr.filter(x => ['input'].includes(x.type))
  let initArr = transformArrayInit(filterArr)

  const [formState, setFormState] = useState(initArr)
  
  const handleChange = (name, value) => {
    let newArr = formState.map(item => {
      if (Object.keys(item)[0] !== name) {
        return item
      }
      return {[name]: value}
    })
    setFormState(newArr)
  }

  // XXX Update when new types added
  const componentFinder = (item, i) => {
    switch (item.type) {
      case 'input': return <Input key={i} seed={item} handleChange={handleChange}/>;
      default: return null;
    } 
  }

  let filterForComponent = formArr.map((item, i) => componentFinder(item, i))

  return filterForComponent
}

const transformArrayInit = (arr) =>
  arr.map(x => (
      {[x.name]: getBlank(x.type)}
    )
  )

// XXX Update when new types added
const getBlank = (type) => {
  switch (type) {
    case 'input': return "";
    default: return null;
  } 
}

SpringForm.propTypes ={
  formArr: PropTypes.arrayOf(PropTypes.shape({
    type: PropTypes.string,
    name: PropTypes.string,
    label: PropTypes.string,
  })).isRequired,
  onSubmit: PropTypes.func
}

SpringForm.defaultProps = {
  formArr: [],
  onSubmit: () => console.log('submit')
};

export default SpringForm


// let formArr = [
//   {
//     type: 'input',
//     name: 'email',
//     label: 'Email',
//   },{
//     type: 'input',
//     name: 'name',
//     label: 'name',
//   },{
//     type: 'number',
//     name: 'other',
//     label: 'other',
//   }
// ]