import { SET_PDF } from '../actions/z-names'

export const setPdfData = op => {
  return {
    type: SET_PDF,
    payload: op
  }
}
