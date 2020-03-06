import {
  SET_OUTR,
  SET_OUTL,
  SET_INR,
  SET_INL,
  SET_COUNT,
  SET_PIC,
  SET_INNER
} from '../actions/z-names'

export const setOutR = newPage => {
  return {
    type: SET_OUTR,
    payload: newPage
  }
}

export const setOutL = newPage => {
  return {
    type: SET_OUTL,
    payload: newPage
  }
}

export const setInR = newPage => {
  return {
    type: SET_INR,
    payload: newPage
  }
}

export const setInL = newPage => {
  return {
    type: SET_INL,
    payload: newPage
  }
}

export const setCount = numb => {
  return {
    type: SET_COUNT,
    payload: numb
  }
}

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
