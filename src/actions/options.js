import { SET_OPTION_CLASS, SET_PDF } from '../actions/z-names'

export const setClass = e => {
  return {
    type: SET_OPTION_CLASS,
    payload: e
  }
}

export const setPdfData = op => {
  return {
    type: SET_PDF,
    payload: op
  }
}
