import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Row from './components/Row';
import { initArrayShape, componentFinder, filterForType } from './services/formtypeservices'
import Container from './components/Container';
import Themer from './services/Themer'
import './style.css'

function SpringForm({formArr}){
  let filterArr = filterForType(formArr)
  let initArr = initArrayShape(filterArr)

  const [formState, setFormState] = useState(initArr)
  const [viewState, setViewState] = useState(0)

  const handleChange = (name, value) => {
    let newArr = formState.map(item => {
      if (Object.keys(item)[0] !== name) {
        return item
      }
      return {[name]: value}
    })
    setFormState(newArr)
  }

  const prevView = () => {
    if (viewState === 0) return
    setViewState(viewState - 1)
  }

  const nextView = () => {
    if (viewState === filterArr.length) return
    setViewState(viewState + 1)
  }

  let compArray = formArr.map((item, i) => <Row key={i}>{componentFinder(item, handleChange)}</Row>)

  return (
    <Themer>
      <Container prevView={prevView} nextView={nextView}>
        {compArray}
      </Container>
    </Themer>
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