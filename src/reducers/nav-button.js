import { SET_NAV_BUTTON } from '../actions/z-names'

const structure = {
  button: false
}

const navButton = (state = structure, action) => {
  switch (action.type) {
    case SET_NAV_BUTTON:
      return {
        ...state,
        button: action.payload
      }
    default:
      return state
  }
}

export default navButton
