import { SET_OPAC_HEADING } from '../actions/z-names'

export const setOpacHeading = newKey => {
  return {
    type: SET_OPAC_HEADING,
    payload: newKey
  }
}
