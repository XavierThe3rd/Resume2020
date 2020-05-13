import { combineReducers } from 'redux'

import index from './layout/indexpage'
import about from './layout/aboutpage'
import special from './layout/specializations'
import setCardData from './layout/card-data'
import footerdata from './layout/footer'

import login from './util/login'
import navigation from './util/navigation'
import pageSwitch from './util/page-switch'
import header from './util/header'
import slider from './util/slider'
import heading from './util/heading'
import globals from './util/globals'
import footer from './util/footer'

export default combineReducers({
  header,
  heading,
  pageSwitch,
  navigation,
  slider,
  setCardData,
  index,
  about,
  special,
  footerdata,
  footer,
  globals,
  login
})
