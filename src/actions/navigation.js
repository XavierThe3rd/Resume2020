import { SET_MOVE, SET_OPAC_NAV } from '../actions/z-names'

export const setMove = newKey => {
  return {
    type: SET_MOVE,
    payload: newKey
  }
}

export const setOpacNav = newKey => {
  return {
    type: SET_OPAC_NAV,
    payload: newKey
  }
}
