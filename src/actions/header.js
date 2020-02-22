import { SET_HTAG, SET_HOME, SET_MOVE, SET_SCROLL } from '../actions/z-names'

export const setHtag = newKey => {
  return {
    type: SET_HTAG,
    payload: newKey
  }
}

export const setHome = newKey => {
  return {
    type: SET_HOME,
    payload: newKey
  }
}

export const setMove = newKey => {
  return {
    type: SET_MOVE,
    payload: newKey
  }
}

export const setScroll = newKey => {
  return {
    type: SET_SCROLL,
    payload: newKey
  }
}
