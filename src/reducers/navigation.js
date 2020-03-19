import { SET_MOVE, SET_OPAC_NAV } from '../actions/z-names'

const structure = {
  opacNav: 1,
  move: false
}

const navigation = (state = structure, action) => {
  switch (action.type) {
    case SET_MOVE:
      return {
        ...state,
        move: action.payload
      }
    case SET_OPAC_NAV:
      return {
        ...state,
        opacNav: action.payload
      }
    default:
      return state
  }
}

export default navigation
