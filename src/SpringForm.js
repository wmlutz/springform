import React, { useState, useReducer, useRef, useEffect, useLayoutEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import Row from './components/Row';
import { initArrayShape, componentFinder, filterForType, reducer } from './services/formtypeservices'
import Container from './components/Container';
import Themer from './services/Themer'
import './style.css'
import colorfinder from './services/colorfinder';
import SubmitPopover from './components/SubmitPopover';

export const SpringForm = ({formArr, baseColor}) => {
  let filterArr = filterForType(formArr)
  let initArr = initArrayShape(filterArr)

  const [formState, setFormState] = useState(initArr)
  const [viewState, setViewState] = useState(0)
  const [openDialog, setDialog] = useState(false)
  const [screenHeight, setScreenHeight] = useState(0)
  const [compLocArr, locDispatch] = useReducer(reducer, []);

  const handleChange = (name, value) => {
    let newArr = formState.map(item => {
      if (Object.keys(item)[0] !== name) {
        return item
      }
      return {[name]: value}
    })
    setFormState(newArr)
  }

  const setView = (num) => {
    if (num < 0 || num >= filterArr.length) return
    scrollToOffset(num)
    setViewState(num)
  }

  const containerRef = useRef(null);

  const scrollToOffset = (num) => {
    let offset = compLocArr[num].offsetTop - (screenHeight/2) + (compLocArr[num].clientHeight/2)
    containerRef.current.scrollTop = offset
  }
  
  let compArray = formArr.map((item, i) => {
    return <Row key={i}>
      {componentFinder(item, handleChange, i, locDispatch, viewState, setView)}
    </Row>
  })

  useEffect(() => {setScreenHeight(containerRef.current.clientHeight)}, [])

  const logit =() => {
    const {scrollTop} = containerRef.current;
    let el = compLocArr.find(x =>  {
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

  let color = colorfinder(baseColor)

  return (
    <Themer color={color}>
      <Container 
        viewState={viewState}
        containerRef={containerRef} 
        setView={setView} 
        locDispatch={locDispatch}
      >
        {compArray}
        <button onClick={() => setDialog(true)}>Click</button>
        <SubmitPopover openDialog={openDialog} handleClose={() => setDialog(false)}/>
      </Container>
    </Themer>
  )
}

SpringForm.propTypes = {
  formArr: PropTypes.arrayOf(PropTypes.shape({
    type: PropTypes.oneOf(['input']),
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