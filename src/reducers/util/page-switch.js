import {
  SET_BARS,
  SET_LOAD,
  SET_LINKCLASS,
  SET_LINK_DATA
} from '../../actions/z-names'
import barA from '../../../images/BarA.svg'
import barB from '../../../images/BarB.svg'
import barC from '../../../images/BarC.svg'
import barD from '../../../images/BarD.svg'
import barE from '../../../images/BarE.svg'
import TheX from '../../../images/TheX.svg'

const structure = {
  indexState: true,
  aboutState: false,
  portState: false,
  load: false,
  linkclass: false,
  bars: [barA, barB, barC, barD, barE, TheX],

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
