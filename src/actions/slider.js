import { SET_PIC, SET_INNER } from '../actions/z-names'

export const setPic = numb => {
  return {
    type: SET_PIC,
    payload: numb
  }
}

export const setInner = numb => {
  return {
    type: SET_INNER,
    payload: numb
  }
}
