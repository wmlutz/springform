import React, { useState } from 'react';
import Input from './Input';
import PropTypes from 'prop-types';

function SpringForm({formArr}){
  if (formArr.length < 1) { return <div>Oops, no form input array.</div>}

  let filterArr = formArr.filter(x => ['input'].includes(x.type))
  let initArr = transformArrayInit(filterArr)

  console.log('init arr', initArr)
  const [formState, setFormState] = useState(initArr)

  
  const componentFinder = (item, i) => {
    switch (item.type) {
      case 'input': return <Input key={i} seed={item}/>;
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

const getBlank = (type) => {
  switch (type) {
    case 'input': return "";
    default: return null;
  } 
}

const itemstructure = (name, type) => {
  return (
    {[name]: getBlank(type)}
  )
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