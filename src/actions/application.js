import { SET_SMOOTH } from '../actions/z-names'

import SmoothScroll from '../utilities/scrollin'

let get = new SmoothScroll()

export const smoothScroll = () => {
  return {
    type: SET_SMOOTH,
    payload: get.switchScroll()
  }
}
