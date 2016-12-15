import React, {Component} from "react"
import NavBar from '../components/NavBar'
import TightEnd from '../components/TightEnd'
import PlayerResults from '../components/PlayerResults'
import Body from '../components/Body'
import Footer from '../components/Footer'

class PlayerTE extends Component {

    render() {
        return (
            <div>
                <div className="body">
                    <div><TightEnd /></div>
                    <hr/> {/* <div><PlayerResults /></div> */}
                    <div className="searchForms">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="panel panel-default">
                                        <div className="panel-heading">
                                            <h3 className="panel-title text-center">Tight End 1</h3>
                                        </div>
                                        <div className="panel-body text-center">
                                            <p>Picture?</p>
                                        </div>
                                        <div className="panel-body text-center">
                                            <table className="table table-bordered table-hovered">
                                                <tr>
                                                    <td>Opponent</td>
                                                    <td className="te1NextOpponent"></td>
                                                </tr>
                                                <tr>
                                                    <td>Pass Yards</td>
                                                    <td className="te1PassYards"></td>
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
                                <div className="col-md-6">
                                    <div className="panel panel-default">
                                        <div className="panel-heading">
                                            <h3 className="panel-title text-center">Tight End 2</h3>
                                        </div>
                                        <div className="panel-body text-center">
                                            <p>Picture?</p>
                                        </div>
                                        <div className="panel-body text-center">
                                            <table className="table table-bordered table-hovered">
                                                <tr>
                                                    <td>Opponent</td>
                                                    <td className="te2NextOpponent"></td>
                                                </tr>
                                                <tr>
                                                    <td>Pass Yards</td>
                                                    <td className="te2PassYards"></td>
                                                </tr>
                                                <tr>
                                                    <td>Rush Yards</td>
                                                    <td className="te2RushYards"></td>
                                                </tr>
                                                <tr>
                                                    <td>Touchdowns</td>
                                                    <td className="te2TD"></td>
                                                </tr>
                                                <tr>
                                                    <td>Fantasy Points</td>
                                                    <td className="te2FantasyPoints"></td>
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

export default PlayerTE
