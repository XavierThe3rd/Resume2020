import { SET_NAV_BUTTON } from '../actions/z-names'

export const setButton = newBool => {
  return {
    type: SET_NAV_BUTTON,
    payload: newBool
  }
}
