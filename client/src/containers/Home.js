import React, {Component} from "react"
import NavBar from '../components/NavBar'
import Body from '../components/Body'
import Footer from '../components/Footer'
import Schedule from '../components/Schedule'

class Home extends Component {

    render() {
        return (
            <div>
                <Schedule />
            </div>
        )
    }
}

export default Home
