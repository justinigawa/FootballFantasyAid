import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Route, Router, browserHistory} from 'react-router';
import Home from './containers/Home';
import Login from './containers/Login';
import Signup from './containers/Signup';
import Quarterback from './containers/Quarterback';
import Runningback from './containers/Runningback';
import TightEnd from './containers/TightEnd';
import WideReciever from './containers/WideReciever';


class App extends Component {
    render() {
        return (
            <Router history={browserHistory}>
                <Route path='/' component={Home}/>
                <Route path='/Login' component={Login}/>
                <Route path='/Signup' component={Signup}/>
                <Route path='/Quarterback' component={Quarterback}/>
                <Route path='/Runningback' component={Runningback}/>
                <Route path='/TightEnd' component={TightEnd}/>
                <Route path='/WideReciever' component={WideReciever}/>
            </Router>
        );
    }
}

export default App;
