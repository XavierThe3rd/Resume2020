import { SET_COUNT, SET_INNER, SET_PIC } from '../../actions/z-names'

const structure = {
  count: 1,
  pic: 1,
  outStateR: null,
  outStateL: null,
  inStateR: null,
  inStateL: null,
  inner: false,
  data: []
}

const slider = (state = structure, action) => {
  switch (action.type) {
    case SET_COUNT:
      return {
        ...state,
        count: action.payload
      }
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
