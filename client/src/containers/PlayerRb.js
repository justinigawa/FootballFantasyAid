import React, {Component} from "react"
import NavBar from '../components/NavBar'
import Runningback from '../components/Runningback'
import RunningbackRight from '../components/RunningbackRight'
import Body from '../components/Body'
import Footer from '../components/Footer'

class PlayerRb extends Component {

    render() {
        return (

                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div><Runningback/></div>
                        </div>
                        <div className="col-md-6">
                            <div><RunningbackRight/></div>
                        </div>
                        <hr/>
                    </div>
                </div>

        )
    }
}

export default PlayerRb
