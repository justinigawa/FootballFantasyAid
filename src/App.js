import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Route, Router, browserHistory} from 'react-router';
import Home from './containers/Home';
import Login from './containers/Login';
import Signup from './containers/Signup';
import PlayerQb from './containers/PlayerQb';
import PlayerRb from './containers/PlayerRb';
import PlayerTE from './containers/PlayerTE';
import PlayerWR from './containers/PlayerWR';
import Results from './containers/Results';
import NavBar from './components/NavBar'
import Footer from './components/Footer'


class App extends Component {
    render() {
        return (
            <div>
            <div className="App">
              <div className="App-header">
                {/* <img src={logo} className="App-logo" alt="logo" /> */}
                <h2>NFL FOOTBALL FANTASY AID</h2>
              </div>
            </div>
            <NavBar />
            <Router history={browserHistory}>
                <Route path='/' component={Home}/>
                {/* <Route path='/Login' component={Login}/>
                <Route path='/Signup' component={Signup}/> */}
                <Route path='/PlayerQb' component={PlayerQb}/>
                <Route path='/PlayerRb' component={PlayerRb}/>
                <Route path='/PlayerTE' component={PlayerTE}/>
                <Route path='/PlayerWR' component={PlayerWR}/>
                <Route path='/Results' component={Results}/>
            </Router>
            <Footer />
        </div>
        );
    }
}

export default App;
