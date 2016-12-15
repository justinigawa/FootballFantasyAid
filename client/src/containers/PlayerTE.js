import React, {Component} from "react"
import NavBar from '../components/NavBar'
import TightEnd from '../components/TightEnd'
import Body from '../components/Body'
import Footer from '../components/Footer'

class PlayerTE extends Component {

    render() {
        return (
            <div>
                <div className="body">
                    <div><TightEnd /></div>
                    <div><Body /></div>
                </div>
            </div>
        )
    }
}

export default PlayerTE
