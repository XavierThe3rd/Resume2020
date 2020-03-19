import { SET_BUTTON_NAV, SET_BUTTON_SPEC } from '../actions/z-names'

const structure = {
  btNav: true,
  btSpec: false
}

const globals = (state = structure, action) => {
  switch (action.type) {
    case SET_BUTTON_NAV:
      return {
        ...state,
        btNav: action.payload
      }
    case SET_BUTTON_SPEC:
      return {
        ...state,
        btSpec: action.payload
      }
    default:
      return state
  }
}

export default globals
