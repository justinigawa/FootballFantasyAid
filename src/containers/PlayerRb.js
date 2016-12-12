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
                    <div><Body /></div>
                </div>
            </div>
        )
    }
}

export default PlayerRb
