import { SET_LOAD, SET_LINKCLASS } from '../actions/z-names'

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
