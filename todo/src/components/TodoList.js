import React from 'react';
import { connect } from 'react-redux';

import { toggleTodo } from '../actions';

class TodoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            newTodo: ""
        };
    }

    handleToggle = (e, index) => {
        e.preventDefault();
        this.props.toggleTodo(index);
    }
    

    render() {
        return (
            <div className="todo-list">
                
                <h2>My To-Do List</h2>
                <ul>
                    {this.props.todos.map((item, index) =>
                    <li key={index} onClick={e => this.handleToggle(e, index)} >
                        {item.value} {item.completed && <strong>completed!</strong>}
                    </li>)}
                </ul>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        todos: state.todos
    }
}

export default connect(mapStateToProps, { toggleTodo })(TodoList);