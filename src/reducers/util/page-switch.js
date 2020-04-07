import { SET_LOAD, SET_LINKCLASS, SET_LINK_DATA } from '../../actions/z-names'

const structure = {
  indexState: true,
  aboutState: false,
  portState: false,
  load: false,
  linkclass: false,

  linkData: [
    {
      loc: '/Resume/Home',
      heading: 'HOME',
      data: [
        {
          ind: 1,
          tag: 'ABOUT',
          ref: '/Resume/About',
          cls: 'about'
        },
        {
          ind: 2,
          tag: 'PORTFOLIO',
          ref: '/Resume/Portfolio',
          cls: 'portfol'
        },
        {
          ind: 3,
          tag: 'CONTACT',
          ref: '/Resume/Home',
          cls: 'contact'
        }
      ]
    },
    {
      loc: '/Resume/About',
      heading: 'ABOUT',
      data: [
        {
          ind: 1,
          tag: 'HOME',
          ref: '/Resume/Home',
          cls: 'home'
        },
        {
          ind: 2,
          tag: 'PORTFOLIO',
          ref: '/Resume/Portfolio',
          cls: 'portfol'
        },
        {
          ind: 3,
          tag: 'CONTACT',
          ref: '/Resume/About',
          cls: 'contact'
        }
      ]
    },
    {
      loc: '/Resume/Portfolio',
      heading: 'PORTFOLIO',
      data: [
        {
          ind: 1,
          tag: 'HOME',
          ref: '/Resume/Home',
          cls: 'home'
        },
        {
          ind: 2,
          tag: 'ABOUT',
          ref: '/Resume/About',
          cls: 'about'
        },
        {
          ind: 3,
          tag: 'CONTACT',
          ref: '/Resume/Portfolio',
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
