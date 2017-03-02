import React, { PropTypes } from 'react'

/**
 * Defining the todo list item component
 */
const Todo = ({ onClick, completed, text }) => (
    <li 
    onClick={onClick} 
    style={{textDecoration: completed ? 'line-through' : 'none'}}>
        {text}
    </li>
)

/**
 * Assigning the above properties with their attributes
 */
Todo.propTypes = {
    onClick: PropTypes.func.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
}

export default Todo