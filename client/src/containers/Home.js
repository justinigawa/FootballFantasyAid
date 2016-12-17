import React, {Component} from "react"
import NavBar from '../components/NavBar'
import Schedule from '../components/Schedule'
import Footer from '../components/Footer'

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
