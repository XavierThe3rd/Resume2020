import { SET_INNER, SET_PIC, SET_REQ, SET_REQ2 } from '../../actions/z-names'

const structure = {
  pic: 1,
  req: 1,
  req2: 1,
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
    case SET_REQ:
      return {
        ...state,
        req: action.payload
      }
    case SET_REQ2:
      return {
        ...state,
        req2: action.payload
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
