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

 export const componentFinder = (item, handleChange, i, handleLocChange) => {
  switch (item.type) {
    case 'input': return <Input index={i} seed={item} handleChange={handleChange} dispatch={handleLocChange}/>;
    default: return null;
  } 
}

export const filterForType = (arr) => {
  return arr.filter(x => ['input'].includes(x.type))
}

export const initLocShape = (arr) => 
  arr.map((x, i) => ({index: i, offsetTop: 0, clientHeight: 0}));
