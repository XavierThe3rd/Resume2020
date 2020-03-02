import {
  SET_HTAG,
  SET_HOME,
  SET_SCROLL,
  SET_MOVE,
  SET_OPAC,
  SET_ZINDEX,
  SET_STEP,
  SET_NAV,
  SET_NAVCLASS,
  SET_DIST,
  LAST_SCROLL,
  NEXT_SCROLL
} from '../actions/z-names'

const structure = {
  navState: false,
  classState: false,
  htag: 'HOME',
  tohome: true,
  scroll: false,
  move: false,
  step: false,
  dist: 0,
  last: 0,
  next: 0
}

const header = (state = structure, action) => {
  switch (action.type) {
    case SET_NAV:
      return {
        ...state,
        navState: action.payload
      }
    case SET_NAVCLASS:
      return {
        ...state,
        classState: action.payload
      }
    case SET_HTAG:
      return {
        ...state,
        htag: action.payload
      }
    case SET_HOME:
      return {
        ...state,
        tohome: action.payload
      }
    case SET_MOVE:
      return {
        ...state,
        move: action.payload
      }
    case SET_SCROLL:
      return {
        ...state,
        scroll: action.payload
      }
    case SET_OPAC:
      return {
        ...state,
        opac: action.payload
      }
    case SET_ZINDEX:
      return {
        ...state,
        zind: action.payload
      }
    case SET_STEP:
      return {
        ...state,
        step: action.payload
      }
    case SET_DIST:
      return {
        ...state,
        dist: action.payload
      }
    case LAST_SCROLL:
      return {
        ...state,
        last: action.payload
      }
    case NEXT_SCROLL:
      return {
        ...state,
        next: action.payload
      }

    default:
      return state
  }
}

export default header
