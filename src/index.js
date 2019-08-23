import React, { useState } from 'react';
import Input from './Input';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import RowWrapper from './RowWrapper';
import { transformArrayInit } from './services/transformArrayInit';

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

  let compArray = formArr.map((item, i) => <RowWrapper>{componentFinder(item, i)}</RowWrapper>)

  return (
    <Container maxWidth="md">
      <Grid container spacing={3}>
        {compArray}
      </Grid>
    </Container>
  )
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