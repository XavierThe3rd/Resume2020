import { combineReducers } from 'redux'

import globals from './globals'
import navigation from './navigation'
import pageSwitch from './page-switch'
import mobile from './mobile.js'
import header from './header'
import application from './application'
import slider from './slider'
import setCardData from './card-data'
import setPenData from './codepen'
import heading from './heading'
import navButton from './nav-button'
import { setOptions, setPdfs } from './option'

export default combineReducers({
  globals,
  header,
  heading,
  pageSwitch,
  navigation,
  navButton,
  mobile,
  application,
  slider,
  setCardData,
  setPenData,
  setOptions,
  setPdfs
})
