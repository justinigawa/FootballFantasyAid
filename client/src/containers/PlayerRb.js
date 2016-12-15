import React, {Component} from "react"
import NavBar from '../components/NavBar'
import Runningback from '../components/Runningback'
import Body from '../components/Body'
import Footer from '../components/Footer'

class PlayerRb extends Component {

    render() {
        return (
            <div>
                <div className="body">
                    <div><Runningback /></div>
                    <hr/> 
                    <div className="searchForms">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="panel panel-default">
                                        <div className="panel-heading">
                                            <h3 className="panel-title text-center">Running Back 1</h3>
                                        </div>
                                        <div className="panel-body text-center">
                                            <p>Picture?</p>
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
                                <div className="col-md-6">
                                    <div className="panel panel-default">
                                        <div className="panel-heading">
                                            <h3 className="panel-title text-center">Running Back 2</h3>
                                        </div>
                                        <div className="panel-body text-center">
                                            <p>Picture?</p>
                                        </div>
                                        <div className="panel-body text-center">
                                            <table className="table table-bordered table-hovered">
                                                <tr>
                                                    <td>Opponent</td>
                                                    <td className="rb2NextOpponent"></td>
                                                </tr>
                                                <tr>
                                                    <td>Rushes</td>
                                                    <td className="rb2Rushes"></td>
                                                </tr>
                                                <tr>
                                                    <td>Rush Yards</td>
                                                    <td className="rb2RushYards"></td>
                                                </tr>
                                                <tr>
                                                    <td>Receptions</td>
                                                    <td className="rb2Receptions"></td>
                                                </tr>
                                                <tr>
                                                    <td>Pass Yards</td>
                                                    <td className="rb2PassYards"></td>
                                                </tr>
                                                <tr>
                                                    <td>Total TDs</td>
                                                    <td className="rb2TotalTDs"></td>
                                                </tr>
                                                <tr>
                                                    <td>Fantasy Points</td>
                                                    <td className="rb2FantasyPoints"></td>
                                                </tr>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default PlayerRb
