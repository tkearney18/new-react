import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reduxTodoAppIndex from '../reducers/ReduxTodosIndex'
import ReduxTodoApp from '../components/ReduxTodoApp'

let store = createStore(ReduxTodoApp)

export default class FullReduxTodoApp extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <ReduxTodoApp />
            </Provider>
        )
    }
}