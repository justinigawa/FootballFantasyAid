import React, { Component } from 'react';
import './App.css';
import {Route, Router, browserHistory} from 'react-router';
import Home from './containers/Home';
import PlayerQb from './containers/PlayerQb';
import PlayerRb from './containers/PlayerRb';
import PlayerTE from './containers/PlayerTE';
import PlayerWR from './containers/PlayerWR';
import NavBar from './components/NavBar'
import Footer from './components/Footer'


class App extends Component {
    render() {
        return (
            <div>
            <div className="App">
              <div className="App-header">
                <h1>NFL FOOTBALL FANTASY AID</h1>
              </div>
            </div>
            <NavBar />
            <Router history={browserHistory}>
                <Route path='/' component={Home}/>
                <Route path='/PlayerQb' component={PlayerQb}/>
                <Route path='/PlayerRb' component={PlayerRb}/>
                <Route path='/PlayerTE' component={PlayerTE}/>
                <Route path='/PlayerWR' component={PlayerWR}/>
            </Router>
            <Footer />
        </div>
        );
    }
}

export default App;
