import {
  SET_OUTR,
  SET_OUTL,
  SET_INR,
  SET_INL,
  SET_COUNT
} from '../actions/z-names'

const structure = {
  count: 1,
  outStateR: null,
  outStateL: null,
  inStateR: null,
  inStateL: null,
  data: []
}

const slider = (state = structure, action) => {
  switch (action.type) {
    case SET_OUTR:
      return {
        ...state,
        outStateR: action.payload
      }
    case SET_OUTL:
      return {
        ...state,
        outStateL: action.payload
      }
    case SET_INR:
      return {
        ...state,
        inStateR: action.payload
      }
    case SET_INL:
      return {
        ...state,
        inStateL: action.payload
      }
    case SET_COUNT:
      return {
        ...state,
        count: action.payload
      }
    default:
      return state
  }
}

export default slider
