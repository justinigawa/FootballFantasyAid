import React, {Component} from "react"
import NavBar from '../components/NavBar'
import TightEnd from '../components/TightEnd'
import TightEndRight from '../components/TightEndRight'
import Body from '../components/Body'
import Footer from '../components/Footer'

class PlayerTE extends Component {

    render() {
        return (

                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div><TightEnd/></div>
                        </div>
                        <div className="col-md-6">
                            <div><TightEndRight/></div>
                        </div>
                        <hr/>
                    </div>
                </div>

        )
    }
}

export default PlayerTE
