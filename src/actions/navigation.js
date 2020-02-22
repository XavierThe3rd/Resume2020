import { SET_NAV, SET_NAVCLASS } from '../actions/z-names'

export const setNav = newBool => {
  return {
    type: SET_NAV,
    payload: newBool
  }
}

export const setClass = newBool => {
  return {
    type: SET_NAVCLASS,
    payload: newBool
  }
}
