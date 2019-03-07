/**
 * reducer
 * 合并拆分的reducer
 */

import { combineReducers } from 'redux'
import todos from './todos'
import option from './visibilityFilter'

const todoApp = combineReducers({
  todos,
  option
})

export default todoApp