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
                    <div><Quarterback /></div>
                    <hr />
                    <div><PlayerResults /></div>
                </div>
            </div>
        )
    }
}

export default PlayerQb
