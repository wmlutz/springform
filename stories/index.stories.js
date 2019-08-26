import React from 'react';

import { storiesOf } from '@storybook/react';

import SpringForm from '../src';

let formArr = [
  {
    type: 'input',
    name: 'email',
    label: 'Please put your email here:',
  },{
    type: 'input',
    name: 'fname',
    label: 'What is your first name?',
    helperText: 'put your name here'
  },{
    type: 'input',
    name: 'lname',
    label: 'Please type your last name:',
    helperText: 'Put your last name here'
  },{
    type: 'input',
    name: 'address',
    label: 'What is your street address?',
    helperText: 'You know, where your house is'
  },{
    type: 'input',
    name: 'city',
    label: 'What city do you work in?',
  },{
    type: 'input',
    name: 'state',
    label: 'What state are you in?',
  },{
    type: 'number',
    name: 'other',
    label: 'other',
  }
]

storiesOf('SpringForm', module)
    .add('just inputs', () => <SpringForm formArr={formArr}/>)
    .add('no array', () => <SpringForm formArr={[]}/>)