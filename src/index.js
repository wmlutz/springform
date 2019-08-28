import React, { useState, useReducer, useRef, useEffect, useLayoutEffect } from 'react';
import PropTypes from 'prop-types';
import Row from './components/Row';
import { initArrayShape, componentFinder, filterForType, reducer } from './services/formtypeservices'
import Container from './components/Container';
import Themer from './services/Themer'
import './style.css'

const SpringForm = ({formArr, baseColor}) => {
  let filterArr = filterForType(formArr)
  let initArr = initArrayShape(filterArr)

  const [formState, setFormState] = useState(initArr)
  const [viewState, setViewState] = useState(0)
  const [screenHeight, setScreenHeight] = useState(0)
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
    let offset = state[num].offsetTop - (screenHeight/2) + (state[num].clientHeight/2)
    containerRef.current.scrollTop = offset
  }
  
  let compArray = formArr.map((item, i) => <Row key={i}>{componentFinder(item, handleChange, i, dispatch, viewState)}</Row>)

  useEffect(() => {setScreenHeight(containerRef.current.clientHeight)}, [])

  const logit =() => {
    const {scrollTop} = containerRef.current;
    let el = state.find(x =>  {
      let top = (x.offsetTop > scrollTop)
      let bottom = ((x.offsetTop + x.clientHeight) < (scrollTop + screenHeight))
      return (top && bottom)
    })
    !!el ? setViewState(el.index) : setViewState(0)
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
    <Themer baseColor={baseColor}>
      <Container prevView={prevView} nextView={nextView} containerRef={containerRef} setSpecificView={setSpecificView} dispatch={dispatch} >
        {compArray}
      </Container>
    </Themer>
  )
}

SpringForm.propTypes = {
  formArr: PropTypes.arrayOf(PropTypes.shape({
    type: PropTypes.string,
    name: PropTypes.string,
    label: PropTypes.string,
  })).isRequired,
  onSubmit: PropTypes.func,
  baseColor: PropTypes.oneOf([
    'red', 'pink', 'purple', 'deepPurple', 'indigo', 'blue', 'lightBlue', 'cyan', 'teal', 'green', 
    'lightGreen', 'lime', 'yellow', 'amber', 'orange', 'deepOrange', 'brown', 'grey', 'blueGrey'
  ]),
}

SpringForm.defaultProps = {
  formArr: [],
  onSubmit: () => console.log('submit'),
  baseColor: 'red'
};

export default SpringForm