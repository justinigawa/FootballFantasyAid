import React, {Component} from "react"
import NavBar from '../components/NavBar'
import Body from '../components/Body'
import Footer from '../components/Footer'

class PlayerQb extends Component {

    render() {
        return (
            <div>
                <div className="body">
                    <div><Body /></div>
                </div>
                <p>PlayerQbs Page</p>
            </div>
        )
    }
}

export default PlayerQb
