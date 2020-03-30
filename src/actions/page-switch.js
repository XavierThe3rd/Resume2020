import { SET_LOAD, SET_LINKCLASS, SET_BARS } from '../actions/z-names'

export const setLoad = newKey => {
  return {
    type: SET_LOAD,
    payload: newKey
  }
}

export const setLClass = newKey => {
  return {
    type: SET_LINKCLASS,
    payload: newKey
  }
}

export const setBars = newKey => {
  return {
    type: SET_BARS,
    payload: newKey
  }
}
