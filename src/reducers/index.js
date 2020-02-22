import { combineReducers } from 'redux'

import navigation from './navigation'
import pageSwitch from './page-switch'
import mobile from './mobile.js'
import header from './header'

export default combineReducers({
  header,
  pageSwitch,
  navigation,
  mobile
})
