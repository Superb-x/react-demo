import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import {connect} from 'react-redux';
import logo from './logo.svg';
import './styles/App.css';

//components
import Head from './components/Head';
import Card from './components/Card';
import Crumb from './components/Crumb';
import About from './components/About';
import AddTodo from './containers/addTodo';

class App extends Component {
  constructor(props){
    super(props)
    console.log(props)
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Hello,world</h1>
        </header>
        <div>
          <Head />
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <h1 onClick={this.props.onClick}>{this.props.num}</h1>
        <Router>
          <div>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/crumb">Topics</Link>
              </li>
              <li>
                <Link to="/todo">Topics</Link>
              </li>
            </ul>
            <Route path="/" exact component={Card}></Route>
            <Route path="/crumb" component={Crumb} />
            <Route path="/about" component={About} />
            <Route path="/todo" component={AddTodo} />
          </div>
        </Router>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  num: state.counter
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => {console.log("mapDispatchToProps")}
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
