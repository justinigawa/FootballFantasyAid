import React, {Component} from "react"
import NavBar from '../components/NavBar'
import Body from '../components/Body'
import Footer from '../components/Footer'

class PlayerRb extends Component {

    render() {
        return (
            <div>
                <div className="body">
                    <div><Body /></div>
                </div>
                <p>PlayerRb Page</p>
            </div>
        )
    }
}

export default PlayerRb
