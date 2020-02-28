import { combineReducers } from 'redux'

import navigation from './navigation'
import pageSwitch from './page-switch'
import mobile from './mobile.js'
import header from './header'
import application from './application'
import slider from './slider'
import setCardData from './card-data'

export default combineReducers({
  header,
  pageSwitch,
  navigation,
  mobile,
  application,
  slider,
  setCardData
})
