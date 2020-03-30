import {
  SET_BUTTON_NAV,
  SET_NAV_BUTTON,
  SET_BUTTON_SPEC,
  SET_CURSOR,
  SET_SMOOTH
} from '../actions/z-names'
import SmoothScroll from '../util/scrollin'

let get = new SmoothScroll()

export const smoothScroll = () => {
  return {
    type: SET_SMOOTH,
    payload: get.switchScroll()
  }
}

export const setBtNav = newKey => {
  return {
    type: SET_BUTTON_NAV,
    payload: newKey
  }
}

export const setButton = newBool => {
  return {
    type: SET_NAV_BUTTON,
    payload: newBool
  }
}

export const setBtSpec = newKey => {
  return {
    type: SET_BUTTON_SPEC,
    payload: newKey
  }
}

export const setCursor = over => {
  return {
    type: SET_CURSOR,
    payload: over
  }
}
