import React, {Component} from "react"
import NavBar from '../components/NavBar'
import WideReciever from '../components/WideReciever'
import PlayerResults from '../components/PlayerResults'
import Body from '../components/Body'
import Footer from '../components/Footer'

class PlayerWR extends Component {

    render() {
        return (
            <div>
                <div className="body">
                    <div><WideReciever /></div>
                    <hr/> {/* <div><PlayerResults /></div> */}
                    <div className="searchForms">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="panel panel-default">
                                        <div className="panel-heading">
                                            <h3 className="panel-title text-center">Wide Reciever 1</h3>
                                        </div>
                                        <div className="panel-body text-center">
                                            <p>Picture?</p>
                                        </div>
                                        <div className="panel-body text-center">
                                            <table className="table table-bordered table-hovered">
                                                <tr>
                                                    <td>Opponent</td>
                                                    <td className="wr1NextOpponent"></td>
                                                </tr>
                                                <tr>
                                                    <td>Receptions</td>
                                                    <td className="wr1Receptions"></td>
                                                </tr>
                                                <tr>
                                                    <td>Pass Yards</td>
                                                    <td className="wr1PassYards"></td>
                                                </tr>
                                                <tr>
                                                    <td>Touchdowns</td>
                                                    <td className="wr1TDs"></td>
                                                </tr>
                                                <tr>
                                                    <td>Fantasy Points</td>
                                                    <td className="wr1FantasyPoints"></td>
                                                </tr>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="panel panel-default">
                                        <div className="panel-heading">
                                            <h3 className="panel-title text-center">Wide Reciever 2</h3>
                                        </div>
                                        <div className="panel-body text-center">
                                            <p>Picture?</p>
                                        </div>
                                        <div className="panel-body text-center">
                                            <table className="table table-bordered table-hovered">
                                                <tr>
                                                    <td>Opponent</td>
                                                    <td className="wr2NextOpponent"></td>
                                                </tr>
                                                <tr>
                                                    <td>Receptions</td>
                                                    <td className="wr2Receptions"></td>
                                                </tr>
                                                <tr>
                                                    <td>Pass Yards</td>
                                                    <td className="wr2PassYards"></td>
                                                </tr>
                                                <tr>
                                                    <td>Touchdowns</td>
                                                    <td className="wrTDs"></td>
                                                </tr>
                                                <tr>
                                                    <td>Fantasy Points</td>
                                                    <td className="wr2FantasyPoints"></td>
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

export default PlayerWR
