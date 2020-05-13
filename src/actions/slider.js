import { SET_PIC, SET_INNER, SET_REQ, SET_REQ2 } from '../actions/z-names'

export const setPic = numb => {
  return {
    type: SET_PIC,
    payload: numb
  }
}

export const setReq = numb => {
  return {
    type: SET_REQ,
    payload: numb
  }
}

export const setReq2 = numb => {
  return {
    type: SET_REQ2,
    payload: numb
  }
}

export const setInner = numb => {
  return {
    type: SET_INNER,
    payload: numb
  }
}
