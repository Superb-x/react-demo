import React, { Component } from 'react';
import {connect} from 'react-redux';

const mapStateToProps = (state, ownProps) => {
    return {
        state
    }
}

class TodoList extends Component {
    render (){
        return (
            <div>
                <ul>
                {
                    this.props.state.todos.map(todo => {
                        return <li key={todo.id}>{todo.text}</li>
                    })
                }
                </ul>
            </div>
        )
    }
}

export default connect(mapStateToProps)(TodoList)