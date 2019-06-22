import React from 'react';
import { connect } from 'react-redux';

import { addNewTodo, toggleTodo } from '../actions';

class TodoList extends React.Component {
    state = {
        newTodo: ""
    };

    render() {
        return (
            <div className="todo-list">
                
            </div>
        )
    }
}

export default TodoList;