import React from 'react';
import Input from '../components/Input';
import Select from '../components/Select'

export const initArrayShape = (arr) => 
  arr.map(x => ({ ...x, value: getBlank(x.type) }));

const getBlank = (type) => {
  switch (type) {
    case 'input': return "";
    case 'select': return [];
    default: return null;
  }
};

 export const componentFinder = (item, handleChange, i, dispatch, viewState, setView, value) => {
  switch (item.type) {
    case 'input': return <Input index={i} handleChange={handleChange} dispatch={dispatch} active={viewState === i + 1} setView={setView} item={value}/>;
    case 'select': return <Select index={i} handleChange={handleChange} dispatch={dispatch} active={viewState === i + 1} setView={setView} item={value}/>;
    default: return null;
  } 
}

export const filterForType = (arr) => {
  return arr.filter(x => ['input', 'select'].includes(x.type))
}

export const initLocShape = (arr) => 
  arr.map((x, i) => ({index: i, offsetTop: 0, clientHeight: 0}));

export const reducer = (state, action) => {
  switch (action.type) {
    case 'update':
      return [
        ...state,
        action.payload
      ];
    default:
      throw new Error();
  }
}