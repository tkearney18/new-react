import React from 'react'
import ReduxFooter from './ReduxFooter'
import AddReduxTodo from '../containers/AddReduxTodo'
import VisibleReduxTodoList from '../containers/VisibleReduxTodoList'

const ReduxTodoApp = () => (
  <div>
    <AddReduxTodo />
    <VisibleReduxTodoList />
    <ReduxFooter />
  </div>
)

export default ReduxTodoApp