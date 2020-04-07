import {
  SET_BUTTON_NAV,
  SET_BUTTON_SPEC,
  SET_CURSOR,
  SET_NAV_BUTTON
} from '../../actions/z-names'

const structure = {
  btNav: true,
  btSpec: false,
  cursorState: false,
  button: false
}

const globals = (state = structure, action) => {
  switch (action.type) {
    case SET_BUTTON_NAV:
      return {
        ...state,
        btNav: action.payload
      }
    case SET_NAV_BUTTON:
      return {
        ...state,
        button: action.payload
      }
    case SET_BUTTON_SPEC:
      return {
        ...state,
        btSpec: action.payload
      }
    case SET_CURSOR:
      return {
        ...state,
        cursorState: action.payload
      }
    default:
      return state
  }
}

export default globals