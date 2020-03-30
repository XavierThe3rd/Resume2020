import { SET_PEN_DATA } from '../actions/z-names'

export const setPenData = data => {
  return {
    type: SET_PEN_DATA,
    payload: data
  }
}
