import {
  SET_HTAG,
  SET_HOME,
  SET_MOVE,
  SET_SCROLL,
  SET_OPAC,
  SET_ZINDEX,
  SET_STEP,
  SET_NAV,
  SET_NAVCLASS,
  SET_DIST,
  LAST_SCROLL,
  NEXT_SCROLL
} from '../actions/z-names'

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

export const setOpac = newKey => {
  return {
    type: SET_OPAC,
    payload: newKey
  }
}

export const setZ = newBool => {
  return {
    type: SET_ZINDEX,
    payload: newBool
  }
}

export const setStep = newPage => {
  return {
    type: SET_STEP,
    payload: newPage
  }
}

export const setNav = newBool => {
  return {
    type: SET_NAV,
    payload: newBool
  }
}

export const setClass = newBool => {
  return {
    type: SET_NAVCLASS,
    payload: newBool
  }
}

export const setDist = newBool => {
  return {
    type: SET_DIST,
    payload: newBool
  }
}

export const setLast = newBool => {
  return {
    type: LAST_SCROLL,
    payload: newBool
  }
}

export const setNext = newBool => {
  return {
    type: NEXT_SCROLL,
    payload: newBool
  }
}
