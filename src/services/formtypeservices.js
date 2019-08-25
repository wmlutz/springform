import React from 'react';
import Input from '../components/Input';

export const initArrayShape = (arr) => 
  arr.map(x => ({ [x.name]: getBlank(x.type) }));
  
const getBlank = (type) => {
  switch (type) {
    case 'input': return "";
    default: return null;
  }
};

 export const componentFinder = (item, handleChange) => {
  switch (item.type) {
    case 'input': return <Input seed={item} handleChange={handleChange}/>;
    default: return null;
  } 
}

export const filterForType = (arr) => {
  return arr.filter(x => ['input'].includes(x.type))
}