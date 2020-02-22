import { SET_MOBILE } from '../actions/z-names'

export const setMobile = newBool => {
  return {
    type: SET_MOBILE,
    payload: newBool
  }
}
