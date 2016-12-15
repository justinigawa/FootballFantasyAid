import React, {Component} from "react"
import {Link} from "react-router"
import axios from 'axios'

var Quarterback = React.createClass({
    getInitialState: function() {
        return {
            mood: 'good'
        };
    },

    handleChange: function(event) {
        event.preventDefault()
        this.setState({search: event.target.value})
    },

    handleSubmit: function(event) {
        event.preventDefault()
        this.getThatShit(this.state.search);
        this.setState({search: ""})
    },

    getThatShit: function(query) {
        var url = "http://api.fantasy.nfl.com/v1/players/stats?statType=weekStats&season=2016&week=6&position=QB&format=json"
        axios.get(url)
        .then(function(res) {
            for (var i = 0; i < res.data.players.length; i++) {
                if (res.data.players[i].name == query) {
                    var teamName = res.data.players[i].teamAbbr
                    this.setState({ name: teamName })
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
                                            <input onChange={this.handleChange} type="text" className="form-control" id="text" placeholder="Search Quarterback" value={this.search} required />
                                            <button onClick={this.handleSubmit}>Submit</button>
                                            <h1>this is {this.state.name}</h1>
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
