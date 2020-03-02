import { SET_POS, SET_SMOOTH } from '../actions/z-names'

import SmoothScroll from '../utilities/scrollin'

let get =
  window.innerWidth > 1700
    ? new SmoothScroll({ speed: 200, smooth: 12 })
    : new SmoothScroll({ speed: 100, smooth: 5 })

export const setPos = data => {
  return {
    type: SET_POS,
    payload: data
  }
}

export const smoothScroll = () => {
  return {
    type: SET_SMOOTH,
    payload: get.switchScroll()
  }
}
