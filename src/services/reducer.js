const reducer = (state, action) => {
  switch (action.type) {
    case 'update_loc':
      return {
        ...state,
        loc: [
          ...state.loc,
          action.payload,
        ]
      };
    case 'set_screen_height':
      return {
        ...state,
        screenHeight: action.payload,
      }
    case 'set_dialog':
      return {
        ...state,
        dialogOpen: action.payload,
      }
    case 'set_viewscreen':
      return {
        ...state,
        viewscreen: action.payload,
      }
    case 'set_form_vals':
      return {
        ...state,
        formVals: action.payload,
      }
    case 'change_form_val':
      const {name, value} = action.payload
      const newArr = state.formVals.map(item =>
        item.name !== name ? item : { ...item, value }
      )
      return {...state, formVals: newArr}
    default:
      throw new Error();
  }
}

const initState = {
  loc: [],
  screenHeight: 0,
  dialogOpen: false,
  viewscreen: 0,
  formVals: []
}

export { reducer, initState }