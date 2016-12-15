import React, {Component} from "react"
import {Link} from "react-router"

const PlayerResults = props => (
    <div className="searchForms">
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <div className="panel panel-default">
                        <div className="panel-heading">
                            <h3 className="panel-title text-center">Player 1</h3>
                        </div>
                        <div className="panel-body text-center">
                            <p>Picture?</p>
                        </div>
                        <div className="panel-body text-center">
                            <table className="table table-bordered table-hovered">
                                <tr>
                                    <td>Opponent</td>
                                    <td>Lastname</td>
                                </tr>
                                <tr>
                                    <td>Completions/Attempts</td>
                                    <td>Smith</td>
                                </tr>
                                <tr>
                                    <td>Pass Yards</td>
                                    <td>Jackson</td>
                                </tr>
                                <tr>
                                    <td>Rush Yards</td>
                                    <td>Doe</td>
                                </tr>
                                <tr>
                                    <td>Total TDs</td>
                                    <td>Smith</td>
                                </tr>
                                <tr>
                                    <td>INT</td>
                                    <td>Jackson</td>
                                </tr>
                                <tr>
                                    <td>Fantasy Points</td>
                                    <td>Doe</td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="panel panel-default">
                        <div className="panel-heading">
                            <h3 className="panel-title text-center">Player 2</h3>
                        </div>
                        <div className="panel-body text-center">
                            <p>Picture?</p>
                        </div>
                        <div className="panel-body text-center">
                            <table className="table table-bordered table-hovered">
                                <tr>
                                    <td>Opponent</td>
                                    <td>Lastname</td>
                                </tr>
                                <tr>
                                    <td>Completions/Attempts</td>
                                    <td>Smith</td>
                                </tr>
                                <tr>
                                    <td>Pass Yards</td>
                                    <td>Jackson</td>
                                </tr>
                                <tr>
                                    <td>Rush Yards</td>
                                    <td>Doe</td>
                                </tr>
                                <tr>
                                    <td>Total TDs</td>
                                    <td>Smith</td>
                                </tr>
                                <tr>
                                    <td>INT</td>
                                    <td>Jackson</td>
                                </tr>
                                <tr>
                                    <td>Fantasy Points</td>
                                    <td>Doe</td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
)

export default PlayerResults
