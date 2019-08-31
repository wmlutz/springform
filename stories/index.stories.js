import React from 'react';

import { storiesOf } from '@storybook/react';

import SpringForm from '../src';

let formArr = [
  {
    type: 'input',
    name: 'co_name',
    label: 'Name of Organization',
    helperText: 'Enter the full legal name of the enterprise. Include any abbreviations as well: Inc, Ltd, LLC, etc.',
  },{
    type: 'input',
    name: 'dba',
    label: 'Doing Business As Name',
    helperText: 'Does your organization operate under an assumed or trade name that is different from its legal name?'
  },{
    type: 'input',
    name: 'address',
    label: 'Street Address of Organization',
  },{
    type: 'input',
    name: 'address',
    label: 'Mailing Address of Organization',
    helperText: 'If different from Street Address.'
  },{
    type: 'input',
    name: 'phone',
    label: 'Business Phone',
  },{
    type: 'input',
    name: 'ein',
    label: 'Federal EIN for Your Organization',
  },{
    type: 'input',
    name: 'ceo',
    label: 'CEO for Your Organization',
  },{
    type: 'input',
    name: 'president',
    label: 'President for Your Organization',
    helperText: 'If different from CEO',
  },{
    type: 'input',
    name: 'owner',
    label: 'Owner for Your Organization',
    helperText: 'If different from CEO or President',
  },{
    type: 'select',
    name: 'spec_interest',
    label: 'This firm is certified as',
    helperText: 'Select all that apply',
    options: [
      {
        key: 'mob',
        text: 'Minority Owned Business'
      },{
        key: 'vob',
        text: 'Veteran Owned Business'
      },{
        key: 'dbe',
        text: 'Disadvantaged Business Enterprise'
      },{
        key: 'wbe',
        text: 'Women Owned Business'
      },
    ]
  }
]

storiesOf('SpringForm', module)
    .add('red', () => <SpringForm formArr={formArr} baseColor='red'/>)
    .add('green', () => <SpringForm formArr={formArr} baseColor='green'/>)
    .add('blue', () => <SpringForm formArr={formArr} baseColor='blue'/>)
