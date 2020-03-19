import { SET_BUTTON_NAV, SET_BUTTON_SPEC } from '../actions/z-names'

export const setBtNav = newKey => {
  return {
    type: SET_BUTTON_NAV,
    payload: newKey
  }
}

export const setBtSpec = newKey => {
  return {
    type: SET_BUTTON_SPEC,
    payload: newKey
  }
}
