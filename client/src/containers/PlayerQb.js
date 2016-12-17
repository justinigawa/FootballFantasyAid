import React, {Component} from "react"
import NavBar from '../components/NavBar'
import Quarterback from '../components/Quarterback'
import QuarterbackRight from '../components/QuarterbackRight'
import Body from '../components/Body'
import Footer from '../components/Footer'

class PlayerQb extends Component {

    render() {
        return (

                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div><Quarterback/></div>
                        </div>
                        <div className="col-md-6">
                            <div><QuarterbackRight/></div>
                        </div>
                        <hr/>
                    </div>
                </div>

        )
    }
}

export default PlayerQb
