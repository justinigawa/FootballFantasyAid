import React, {Component} from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import Body from '../components/Body'

class Signup extends Component {

    render() {
        return (
            <div>
                <div><NavBar /></div>
                <div>This is the signup page</div>
                <div><Body /></div>
                <div><Footer /></div>
            </div>
        )
    }
}

export default Signup
