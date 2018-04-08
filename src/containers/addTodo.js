import React, { Component } from 'react';
import {connect} from 'react-redux';
import {addTodo} from '../actions';
import TodoList from '../components/TodoList';

class AddTodo extends Component {
    render() {
        return (
            <div>
                <form onSubmit={e => {
                    e.preventDefault()
                    if(!this.input.value.trim()) {
                        return null
                    }
                    this.props.dispatch(addTodo(this.input.value))
                    this.input.value = ''
                }}>
                    <input type="text" ref={node => this.input = node}/>
                    <button type="submit">Add Todo</button>
                </form>
                <TodoList />
            </div>      
        )
    }
}

export default connect()(AddTodo)