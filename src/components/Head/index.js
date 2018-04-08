import React, { Component } from 'react'
import './head.css'
class Head extends Component {
    constructor (props){
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() { 
        console.log(this);
    }
    render(){
        return (
            <div>
                <div onClick={this.handleClick}>事件处理</div>
                <div className="hello">hello, world</div>
            </div>
        );
    }
}

export default Head