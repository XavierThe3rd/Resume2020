import { SET_INNER, SET_PIC } from '../../actions/z-names'

const structure = {
  pic: 1,
  inner: false,
  data: []
}

const slider = (state = structure, action) => {
  switch (action.type) {
    case SET_PIC:
      return {
        ...state,
        pic: action.payload
      }
    case SET_INNER:
      return {
        ...state,
        inner: action.payload
      }
    default:
      return state
  }
}

export default slider
