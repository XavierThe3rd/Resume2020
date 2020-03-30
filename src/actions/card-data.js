import { SET_DATA } from '../actions/z-names'

export const setCardData = data => {
  return {
    type: SET_DATA,
    payload: data
  }
}
