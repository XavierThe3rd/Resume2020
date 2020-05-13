import { SET_LOAD, SET_LINKCLASS, SET_LINK_DATA } from '../../actions/z-names'

const structure = {
  indexState: true,
  aboutState: false,
  portState: false,
  load: false,
  linkclass: false,

  linkData: [
    {
      loc: '/resume/home',
      heading: 'HOME',
      data: [
        {
          ind: 1,
          tag: 'ABOUT',
          ref: '/resume/about',
          cls: 'about'
        },
        {
          ind: 2,
          tag: 'PORTFOLIO',
          ref: '/resume/portfolio',
          cls: 'portfol'
        },
        {
          ind: 3,
          tag: 'CONTACT',
          ref: '/resume/home',
          cls: 'contact'
        }
      ]
    },
    {
      loc: '/resume/about',
      heading: 'ABOUT',
      data: [
        {
          ind: 1,
          tag: 'HOME',
          ref: '/resume/home',
          cls: 'home'
        },
        {
          ind: 2,
          tag: 'PORTFOLIO',
          ref: '/resume/portfolio',
          cls: 'portfol'
        },
        {
          ind: 3,
          tag: 'CONTACT',
          ref: '/resume/about',
          cls: 'contact'
        }
      ]
    },
    {
      loc: '/resume/portfolio',
      heading: 'PORTFOLIO',
      data: [
        {
          ind: 1,
          tag: 'HOME',
          ref: '/resume/home',
          cls: 'home'
        },
        {
          ind: 2,
          tag: 'ABOUT',
          ref: '/resume/about',
          cls: 'about'
        },
        {
          ind: 3,
          tag: 'CONTACT',
          ref: '/resume/portfolio',
          cls: 'contact'
        }
      ]
    }
  ]
}

const pageSwitch = (state = structure, action) => {
  switch (action.type) {
    case SET_LINK_DATA:
      return {
        ...state,
        linkData: structure.linkData
      }
    case SET_LOAD:
      return {
        ...state,
        load: action.payload
      }
    case SET_LINKCLASS:
      return {
        ...state,
        linkclass: action.payload
      }

    default:
      return state
  }
}

export default pageSwitch
