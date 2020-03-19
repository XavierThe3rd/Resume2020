import {
  SET_HTAG,
  SET_HOME,
  SET_SCROLL,
  SET_STEP,
  SET_NAV,
  SET_NAVCLASS,
  SET_DIST
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

export const setScroll = newKey => {
  return {
    type: SET_SCROLL,
    payload: newKey
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
