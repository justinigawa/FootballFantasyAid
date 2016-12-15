import React, {Component} from "react"
import NavBar from '../components/NavBar'
import Quarterback from '../components/Quarterback'
import PlayerResults from '../components/PlayerResults'
import Body from '../components/Body'
import Footer from '../components/Footer'

class PlayerQb extends Component {

    render() {
        return (
            <div>
                <div className="body">
                    <div><Quarterback/></div>
                    <hr/> {/* <div><PlayerResults /></div> */}
                    <div className="searchForms">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="panel panel-default">
                                        <div className="panel-heading">
                                            <h3 className="panel-title text-center">Quarterback 1</h3>
                                        </div>
                                        <div className="panel-body text-center">
                                            <p>Picture?</p>
                                        </div>
                                        <div className="panel-body text-center">
                                            <table className="table table-bordered table-hovered">
                                                <tr>
                                                    <td>Opponent</td>
                                                    <td className="qb1NextOpponent"></td>
                                                </tr>
                                                <tr>
                                                    <td>Completions/Attempts</td>
                                                    <td className="qb1CompletionAttempts"></td>
                                                </tr>
                                                <tr>
                                                    <td>Pass Yards</td>
                                                    <td className="qb1PassYards"></td>
                                                </tr>
                                                <tr>
                                                    <td>Rush Yards</td>
                                                    <td className="qb1RushYards"></td>
                                                </tr>
                                                <tr>
                                                    <td>Total TDs</td>
                                                    <td className="qb1TotalTD"></td>
                                                </tr>
                                                <tr>
                                                    <td>INT</td>
                                                    <td className="qb1INT"></td>
                                                </tr>
                                                <tr>
                                                    <td>Fantasy Points</td>
                                                    <td className="qb1FantasyPoints"></td>
                                                </tr>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="panel panel-default">
                                        <div className="panel-heading">
                                            <h3 className="panel-title text-center">Quarterback 2</h3>
                                        </div>
                                        <div className="panel-body text-center">
                                            <p>Picture?</p>
                                        </div>
                                        <div className="panel-body text-center">
                                            <table className="table table-bordered table-hovered">
                                                <tr>
                                                    <td>Opponent</td>
                                                    <td className="qb2NextOpponent"></td>
                                                </tr>
                                                <tr>
                                                    <td>Completions/Attempts</td>
                                                    <td className="qb2CompletionAttempts"></td>
                                                </tr>
                                                <tr>
                                                    <td>Pass Yards</td>
                                                    <td className="qb2PassYards"></td>
                                                </tr>
                                                <tr>
                                                    <td>Rush Yards</td>
                                                    <td className="qb2RushYards"></td>
                                                </tr>
                                                <tr>
                                                    <td>Total TDs</td>
                                                    <td className="qb2TotalTD"></td>
                                                </tr>
                                                <tr>
                                                    <td>INT</td>
                                                    <td className="qb2INT"></td>
                                                </tr>
                                                <tr>
                                                    <td>Fantasy Points</td>
                                                    <td className="qb2FantasyPoints"></td>
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

export default PlayerQb
