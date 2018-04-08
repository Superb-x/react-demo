import React, { Component } from 'react';
import {connect} from 'react-redux';

const mapStateToProps = (state, ownProps) => ({
    num: state
})

class Card extends Component {
    render() {
        return (
            <div className="card-box">
                <h1>Redux计数器</h1>
                <button onClick={() => {this.props.dispatch({type: "INCREMENT"})}}>+</button>
                <button onClick={() => {this.props.dispatch({type: "DECREMENT"})}}>-</button>
            </div>    
        )
    }
}

export default connect(mapStateToProps)(Card)