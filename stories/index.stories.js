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
    label: 'name',
  },{
    type: 'number',
    name: 'other',
    label: 'other',
  }
]

storiesOf('SpringForm', module)
    .add('just inputs', () => <SpringForm formArr={formArr}/>)