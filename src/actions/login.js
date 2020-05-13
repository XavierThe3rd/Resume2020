import { SET_KEY, SET_SECRET } from '../actions/z-names'

export const setKeys = newInp => {
  return {
    type: SET_KEY,
    payload: newInp
  }
}

export const setSecret = newSecret => {
  return {
    type: SET_SECRET,
    payload: newSecret
  }
}
