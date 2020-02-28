import {
  SET_INDEX,
  SET_ABOUT,
  SET_PORT,
  SET_BARS,
  SET_LOAD,
  SET_LINKCLASS
} from '../actions/z-names'
import barA from '../../images/BarA.svg'
import barB from '../../images/BarB.svg'
import barC from '../../images/BarC.svg'
import barD from '../../images/BarD.svg'
import barE from '../../images/BarE.svg'
import TheX from '../../images/TheX.svg'

const structure = {
  indexState: true,
  aboutState: false,
  portState: false,
  load: false,
  linkclass: false,
  bars: [barA, barB, barC, barD, barE, TheX],

  index: [
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
      cls: 'port'
    },
    {
      ind: 3,
      tag: 'CONTACT',
      ref: '#',
      cls: 'contact'
    }
  ],
  about: [
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
      cls: 'port'
    },
    {
      ind: 3,
      tag: 'CONTACT',
      ref: '#',
      cls: 'contact'
    }
  ],
  port: [
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
      ref: '#',
      cls: 'contact'
    }
  ]
}

const pageSwitch = (state = structure, action) => {
  switch (action.type) {
    case SET_INDEX:
      return {
        ...state,
        index: structure.index,
        indexState: action.payload
      }
    case SET_ABOUT:
      return {
        ...state,
        about: structure.about,
        aboutState: action.payload
      }
    case SET_PORT:
      return {
        ...state,
        port: structure.port,
        portState: action.payload
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
    case SET_BARS:
      return {
        ...state,
        bars: structure.bars
      }

    default:
      return state
  }
}

export default pageSwitch
