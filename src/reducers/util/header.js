import {
  SET_HTAG,
  SET_HOME,
  SET_SCROLL,
  SET_OPAC,
  SET_STEP,
  SET_NAV,
  SET_NAVCLASS,
  SET_DIST
} from '../../actions/z-names'

const structure = {
  navState: false,
  classState: false,
  htag:
    window.location.pathname === '/Resume/Home'
      ? 'HOME'
      : window.location.pathname === '/Resume/Portfolio'
      ? 'PORTFOLIO'
      : window.location.pathname === '/Resume/About'
      ? 'ABOUT'
      : null,
  tohome: true,
  scroll: false,
  move: false,
  step: true,
  dist: 0
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
    case SET_SCROLL:
      return {
        ...state,
        scroll: action.payload
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

    default:
      return state
  }
}

export default header
