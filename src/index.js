import React, { useState, useReducer, useRef, useEffect, useLayoutEffect } from 'react';
import PropTypes from 'prop-types';
import Row from './components/Row';
import { initArrayShape, componentFinder, filterForType } from './services/formtypeservices'
import Container from './components/Container';
import Themer from './services/Themer'
import './style.css'

function reducer(state, action) {
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

const SpringForm = ({formArr}) => {
  let filterArr = filterForType(formArr)
  let initArr = initArrayShape(filterArr)

  const [formState, setFormState] = useState(initArr)
  const [viewState, setViewState] = useState(0)
  const [screenState, setScreenState] = useState(0)
  const [scrollY, setScrollY] = useState(0);
  const [state, dispatch] = useReducer(reducer, []);

  const handleChange = (name, value) => {
    let newArr = formState.map(item => {
      if (Object.keys(item)[0] !== name) {
        return item
      }
      return {[name]: value}
    })
    setFormState(newArr)
  }

  const handleLocChange = (obj) => dispatch(obj)

  const prevView = () => {
    if (viewState === 0) return
    setSpecificView(viewState - 1)
  }

  const nextView = () => {
    if (viewState === filterArr.length) return
    setSpecificView(viewState + 1)
  }

  const setSpecificView = (num) => {
    scrollToOffset(num)
    setViewState(num)
  }

  const containerRef = useRef(null);

  const scrollToOffset = (num) => {
    let offset = state[num].offsetTop - (screenState/2) + (state[num].clientHeight/2)
    containerRef.current.scrollTop = offset
  }
  
  let compArray = formArr.map((item, i) => <Row key={i}>{componentFinder(item, handleChange, i, handleLocChange)}</Row>)

  useEffect(() => {setScreenState(containerRef.current.clientHeight)}, [])

  function logit() {
    // console.log(containerRef)
    setScrollY(containerRef.current.scrollTop);
  }

  useLayoutEffect(() => {
    function watchScroll() {
      containerRef.current.addEventListener("scroll", logit);
    }
    watchScroll();
    return () => {
      containerRef.current.removeEventListener("scroll", logit);
    };
  });

  return (
    <Themer>
      <Container prevView={prevView} nextView={nextView} containerRef={containerRef} setSpecificView={setSpecificView} >
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