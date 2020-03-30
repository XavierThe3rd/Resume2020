import { combineReducers } from 'redux'

import index from './layout/indexpage'
import about from './layout/aboutpage'
import special from './layout/specializations'
import setCardData from './layout/card-data'
import setPenData from './layout/codepen'
import setPdfs from './layout/pdfs'
import footerdata from './layout/footer'

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
  setPenData,
  setPdfs,
  index,
  about,
  special,
  footerdata,
  footer,
  globals
})
