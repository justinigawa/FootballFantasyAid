import React, {Component} from "react"
import NavBar from '../components/NavBar'
import WideReciever from '../components/WideReciever'
import WideRecieverRight from '../components/WideRecieverRight'
import Body from '../components/Body'
import Footer from '../components/Footer'

class PlayerWR extends Component {

    render() {
        return (

                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div><WideReciever/></div>
                        </div>
                        <div className="col-md-6">
                            <div><WideRecieverRight/></div>
                        </div>
                        <hr/>
                    </div>
                </div>

        )
    }
}

export default PlayerWR
