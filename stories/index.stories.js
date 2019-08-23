import React from 'react';

import { storiesOf } from '@storybook/react';

import SpringForm from '../src';

let formArr = [
  {
    type: 'input',
    name: 'email',
    label: 'Email',
  },{
    type: 'input',
    name: 'name',
    label: 'Name',
    helperText: 'put your name here'
  },{
    type: 'number',
    name: 'other',
    label: 'other',
  }
]

storiesOf('SpringForm', module)
    .add('just inputs', () => <SpringForm formArr={formArr}/>)
    .add('no array', () => <SpringForm formArr={[]}/>)