import React,{ Component } from 'react';
import ReactDOM from 'react-dom';

// Simple ES6 todo list
class SimpleTodo extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {items: [], text: ''};
    }
    render() {
        return(
            <div>
                <h2>Todo List</h2>
                <TodoList items={this.state.items} />
                <form onSubmit={this.handleSubmit}>
                    <input onChange={this.handleChange} value={this.state.text} />
                    <button>{'Add #' + (this.state.items.length+1)}</button>
                </form>
            </div>
        );
    }
    
    handleChange(e) {
        this.setState({text:e.target.value});
    }

    handleSubmit(e) {
        e.preventDefault();
        var newItem = {
            text: this.state.text,
            id: Date.now()
        };
        this.setState((prevState) => ({
            items: prevState.items.concat(newItem),
            text:''
        }));
    }
}

class TodoList extends Component {
    render() {
        return (
            <ul>
                {this.props.items.map(item =>(
                    <li key={item.id}>{item.text}</li>
                ))}
            </ul>
        )
    }
}

export default SimpleTodo;