import React from 'react';
import { connect } from 'react-redux';
import { addNewTodo } from '../actions';

class AddTodo extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            newTodo: ''
        }
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.addNewTodo(this.state.newTodo);
        this.setState({ newTodo: ''})
    }

    handleChange = e => {
        this.setState({ newTodo: e.target.value })
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input
                    type= 'text'
                    placeholder= 'Add A New To-Do!'
                    value= {this.state.newTodo}
                    onChange={this.handleChange}
                />
                <button onClick={this.handleSubmit}>Add To-Do!</button>
            </form>
        )
    }
}

const mapStateToProps = state => {
    return {
        todos: state.todos
    }
}

export default connect(mapStateToProps, { addNewTodo })(AddTodo);