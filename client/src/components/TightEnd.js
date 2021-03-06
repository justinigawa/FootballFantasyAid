import React, {Component} from "react"
import {Link} from "react-router"
import axios from 'axios'
import Child from './ChildTE.js'

var arr = [];

var TightEnd = React.createClass({
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
                                        <h3 className="panel-title text-center">Tight End 1</h3>
                                    </div>
                                    <div className="panel-body text-center">
                                        <form>
                                            <div className="form-group">
                                                <Child onChange={this.changeName}/>
                                                <button onClick={this.handleSubmit}>Submit</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <div className="panel panel-default">
                                    <div className="panel-heading">
                                        <h3 className="panel-title text-center">Tight End 1</h3>
                                    </div>
                                    <div className="panel-body text-center">
                                        <h1>{this.state.trueName}</h1>
                                    </div>
                                    <div className="panel-body text-center">
                                        <table className="table table-bordered table-hovered">
                                            <tr>
                                                <td>Opponent</td>
                                                <td className="te1NextOpponent"></td>
                                            </tr>
                                            <tr>
                                                <td>Receiving Yards</td>
                                                <td className="te1ReceivingYards"></td>
                                            </tr>
                                            <tr>
                                                <td>Rush Yards</td>
                                                <td className="te1RushYards"></td>
                                            </tr>
                                            <tr>
                                                <td>Touchdowns</td>
                                                <td className="te1TD"></td>
                                            </tr>
                                            <tr>
                                                <td>Fantasy Points</td>
                                                <td className="te1FantasyPoints"></td>
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

export default TightEnd
