import React, {Component} from "react"
import {Link} from "react-router"
import axios from 'axios'
import ChildRight from './ChildRbRight'

var arr = [];

var RunningbackRight = React.createClass({
    getInitialState: function() {
        return {name: 'Tom Brady'}
    },

    changeName: function(newName) {
        this.setState({name: newName})
    },

    handleSubmit: function(event) {
        event.preventDefault()
        this.getThatShit(this.state.name)
        this.setState({search: ""})
        this.setState({trueName: this.state.name})
    },

    getThatShit: function(query) {
        var url = "http://api.fantasy.nfl.com/v1/players/stats?statType=weekStats&season=2016&week=6&position=QB&format=json"
        axios.get(url).then(function(res) {
            for (var i = 0; i < res.data.players.length; i++) {
                if (res.data.players[i].name == query) {
                    console.log(res.data.players[i].name)
                }
            }
        }).catch(function(err) {
            console.log(err);
        })
    },

    render: function() {
        return (
            <div className="searchForms">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="section1">
                                <div className="panel panel-default">
                                    <div className="panel-heading">
                                        <h3 className="panel-title text-center">Running Back 2</h3>
                                    </div>
                                    <div className="panel-body text-center">
                                        <form>
                                            <div className="form-group">
                                                <ChildRight onChange={this.changeName}/>
                                                <button onClick={this.handleSubmit}>Submit</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <div className="panel panel-default">
                                    <div className="panel-heading">
                                        <h3 className="panel-title text-center">Running Back 2</h3>
                                    </div>
                                    <div className="panel-body text-center">
                                        <h1>{this.state.trueName}</h1>
                                    </div>
                                    <div className="panel-body text-center">
                                        <table className="table table-bordered table-hovered">
                                            <tr>
                                                <td>Opponent</td>
                                                <td className="rb1NextOpponent"></td>
                                            </tr>
                                            <tr>
                                                <td>Rushes</td>
                                                <td className="rb1Rushes"></td>
                                            </tr>
                                            <tr>
                                                <td>Rush Yards</td>
                                                <td className="rb1RushYards"></td>
                                            </tr>
                                            <tr>
                                                <td>Receptions</td>
                                                <td className="rb1Receptions"></td>
                                            </tr>
                                            <tr>
                                                <td>Pass Yards</td>
                                                <td className="rb1PassYards"></td>
                                            </tr>
                                            <tr>
                                                <td>Total TDs</td>
                                                <td className="rb1TotalTD"></td>
                                            </tr>
                                            <tr>
                                                <td>Fantasy Points</td>
                                                <td className="rb1FantasyPoints"></td>
                                            </tr>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
});

export default RunningbackRight
