import React, {Component} from "react"
import {Link} from "react-router"
import axios from 'axios'
import Sibling from './SiblingQuarterback.js'
import Child from './ChildQuarterback.js'

var arr = [];

var Quarterback = React.createClass({
    getInitialState: function() {
        return { name: 'Tom Brady' }
    },

    changeName: function(newName) {
        this.setState({name: newName});
    },

    handleSubmit: function(event) {
        event.preventDefault()
        this.getThatShit(this.state.name)
        this.setState({search: ""})
        this.setState({trueName: this.state.name})
        console.log(this.getThatShit(this.state.name))
    },

    getThatShit: function(query) {
        var url = "http://api.fantasy.nfl.com/v1/players/stats?statType=weekStats&season=2016&week=6&position=QB&format=json"
        axios.get(url)
        .then(function(res) {
            for (var i = 0; i < res.data.players.length; i++) {
                if (res.data.players[i].name == query) {
                    console.log(res.data.players[i].name)
                }
            }
        })
        .catch(function(err) {
            console.log(err);
        })
    },

    render: function() {
        return (
            <div className="searchForms">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="panel panel-default">
                                <div className="panel-heading">
                                    <h3 className="panel-title text-center">Quarterback 1</h3>
                                </div>
                                <div className="panel-body text-center">
                                    <form>
                                        <div className="form-group">
                                            <Child onChange={this.changeName}/>
                                            <Sibling name={this.state.trueName} />
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="panel panel-default">
                                <div className="panel-heading">
                                    <h3 className="panel-title text-center">Quarterback 2</h3>
                                </div>
                                <div className="panel-body text-center">
                                    <form>
                                        <div className="form-group">
                                            <input type="text" className="form-control" id="text" placeholder="Search Quarterback" required />
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-offset-4">
                            <button type="submit" className="btn btn-default">Compare Quarterbacks</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});

export default Quarterback
