/*
* A simple counter app with redux and react and ES6
*/
import React, { Component } from 'react';
import { createStore } from 'redux';
import { Provider, connect } from 'react-redux';

// first create the reducer which will update the state by 1.
// if an unknown action is passed it will refer to default 
const reducer = (state = 0, action) => {
    switch(action.type) {
        case 'INC':
            return state + 1;
        case 'DEC':
            return state - 1;
        case 'CLEAR':
            return state = 0;
        default:
            return state;
    }
}


//create a store which will recieve updates from the above reducer.
const store = createStore(reducer);

//create the current count display and the buttons 
class Counter extends React.Component {
    render() {
        // now using the below array to more properties to the this.props Object.
        const {number, increase, decrease, clear} = this.props
        //to see this in action uncomment the below line.
        //console.log(this.props);
        //return the full element including the number state and buttons
        return (
            <div>
                {number}
                <div>
                    <button onClick={event=>decrease()}>DEC</button>                                        
                    <button onClick={event=>increase()}>INC</button>
                    <button onClick={event=>clear()}>Clear</button>
                </div>
            </div>
        )
    }
}

//now we need to map the state to the property created above.
const mapStateToProps = state => ({
    number: state
})

//this is mapping the dispatch functions defined in Counter to their props which is the type that the reducer reads
const mapDispatchToProps = dispatch => ({
        increase: () => dispatch({type: 'INC'}),
        decrease: () => dispatch({type: 'DEC'}),
        clear: () => dispatch({type: 'CLEAR'})
})

/**
 * Using the react-redux connect function, we connect the 
 * mapDispatchToProps and mapStateToProps redux items to the 
 * react Counter component. This connects the react component to the redux store.
 */
let CounterConnector = connect(mapStateToProps, mapDispatchToProps)(Counter);

//Exporting the whole app out so that it can be picked up by react-router
export default class CounterApp extends React.Component {
    render() {
        return (
            /**
             * The Provider component is a parent component to (magically)
             * pass the store properties to its children
             */
            <Provider store={store}>
                <CounterConnector />
            </Provider>
        )
    }
}