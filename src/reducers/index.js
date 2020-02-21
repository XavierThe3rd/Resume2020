import { combineReducers } from 'redux'

import navigation from './navigation.js'
import mobile from './mobile.js'

export default combineReducers({
    navigation,
    mobile
})