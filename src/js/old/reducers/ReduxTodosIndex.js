import { combineReducers } from 'redux'
import todos from './todos'
import visibilityFilter from './visibilityFilter'

const reduxTodoAppIndex = combineReducers({
    todos,
    visibilityFilter
})

export default reduxTodoAppIndex