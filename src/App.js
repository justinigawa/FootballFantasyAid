import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Route, Router, browserHistory} from 'react-router';
import Home from './containers/Home';
import Login from './containers/Login';
import Signup from './containers/Signup';
import Player from './containers/Player';
import Results from './containers/Results';

class App extends Component {
    render() {
        return (
            <Router history={browserHistory}>
                <Route path='/' component={Home}/>
                <Route path='/Login' component={Login}/>
                <Route path='/Signup' component={Signup}/>
                <Route path='/Player' component={Player}/>
                <Route path='/Results' component={Results}/>
            </Router>
        );
    }
}

export default App;
