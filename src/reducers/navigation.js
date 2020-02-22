import { SET_NAV, SET_NAVCLASS, SET_HTAG } from '../actions/z-names'

const structure = {
  navState: false,
  classState: false
}

const navigation = (state = structure, action) => {
  switch (action.type) {
    case SET_NAV:
      return {
        ...state,
        navState: action.payload
      }
    case SET_NAVCLASS:
      return {
        ...state,
        classState: action.payload
      }
    default:
      return state
  }
}

export default navigation
