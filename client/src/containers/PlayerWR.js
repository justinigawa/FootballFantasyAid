import React, {Component} from "react"
import NavBar from '../components/NavBar'
import WideReciever from '../components/WideReciever'
import Body from '../components/Body'
import Footer from '../components/Footer'

class PlayerWR extends Component {

    render() {
        return (
            <div>
                <div className="body">
                    <div><WideReciever /></div>
                    <div><Body /></div>
                </div>
            </div>
        )
    }
}

export default PlayerWR
