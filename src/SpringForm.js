import React, { useRef, useEffect, useLayoutEffect, useReducer } from 'react';
import PropTypes from 'prop-types';
import Row from './components/Row';
import { initArrayShape, componentFinder, filterForType } from './services/formtypeservices'
import Container from './components/Container';
import Themer from './services/Themer'
import colorfinder from './services/colorfinder';
import SubmitPopover from './components/SubmitPopover';
import {reducer, initState} from './services/reducer'
import './style.css'

export const SpringForm = ({formArr, baseColor, onSubmit, logo}) => {
  let filterArr = filterForType(formArr)
  let initArr = initArrayShape(filterArr)
  const [state, dispatch] = useReducer(reducer, {...initState, formVals: initArr});
  const containerRef = useRef(null);

  useEffect(() => {
    dispatch({
      type: 'set_screen_height', payload: containerRef.current.clientHeight
    })
  }, [])

  const handleChange = (name, value) => {
    dispatch({
      type: 'change_form_val', payload: {name, value}
    })
  }

  const setView = (num) => {
    if (num < 0) return
    if(num > filterArr.length) {
      dispatch({type: 'set_dialog', payload: true})
      return
    }
    scrollToOffset(num)
    dispatch({type: 'set_viewscreen', payload: num})
  }


  const scrollToOffset = (num) => {
    let offset = state.loc[num].offsetTop - (state.screenHeight/2) + (state.loc[num].clientHeight/2)
    containerRef.current.scrollTop = offset
  }
  
  let compArray = state.formVals.map((item, i) =>{
    let {value} = item;
    return (<Row key={i}>
      {componentFinder(item, handleChange, i, dispatch, state.viewscreen, setView, value)}
    </Row>)
  })

  const logit =() => {
    const {scrollTop} = containerRef.current;
    let el = state.loc.find(x =>  {
      let top = (x.offsetTop > scrollTop)
      let bottom = ((x.offsetTop + x.clientHeight) < (scrollTop + state.screenHeight))
      return (top && bottom)
    })
    !!el ? dispatch({type: 'set_viewscreen', payload: el.index}) : null

  }

  useLayoutEffect(() => {
    let watchScroll = () => containerRef.current.addEventListener("scroll", logit);
    
    watchScroll();
    return () => {
      containerRef.current.removeEventListener("scroll", logit);
    };
  });

  let color = colorfinder(baseColor)

  const handleSubmit = () => {
    dispatch({type: 'set_dialog', payload: false})
    onSubmit(state.formVals)
  }

  return (
      <Themer color={color}>
        <Container 
          viewState={state.viewscreen}
          containerRef={containerRef} 
          setView={setView} 
          locDispatch={dispatch}
          logo={logo}
        >
          {compArray}
          <SubmitPopover openDialog={state.dialogOpen} handleClose={() => dispatch({type: 'set_dialog', payload: false})} handleSubmit={handleSubmit}/>
        </Container>
      </Themer>
  )
}

SpringForm.propTypes = {
  formArr: PropTypes.arrayOf(PropTypes.shape({
    type: PropTypes.oneOf(['input', 'select']),
    name: PropTypes.string,
    label: PropTypes.string,
  })).isRequired,
  onSubmit: PropTypes.func,
  baseColor: PropTypes.oneOf([
    'red', 'pink', 'purple', 'deepPurple', 'indigo', 'blue', 'lightBlue', 'cyan', 'teal', 'green', 
    'lightGreen', 'lime', 'yellow', 'amber', 'orange', 'deepOrange', 'brown', 'grey', 'blueGrey'
  ]),
  logo: PropTypes.string,
}

SpringForm.defaultProps = {
  formArr: [],
  onSubmit: (data) => console.log('submit' , data),
  baseColor: 'red',
  logo: null
};