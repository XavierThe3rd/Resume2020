import { SET_HTAG, SET_HOME, SET_SCROLL, SET_MOVE } from '../actions/z-names'

const structure = {
  htag: 'HOME',
  tohome: true,
  scroll: false,
  move: false
}

const header = (state = structure, action) => {
  switch (action.type) {
    case SET_HTAG:
      return {
        ...state,
        htag: action.payload
      }
    case SET_HOME:
      return {
        ...state,
        tohome: action.payload
      }
    case SET_MOVE:
      return {
        ...state,
        move: action.payload
      }
    case SET_SCROLL:
      return {
        ...state,
        scroll: action.payload
      }

    default:
      return state
  }
}

export default header
