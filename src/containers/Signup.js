import React, {Component} from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Body from '../components/Body'

class Signup extends Component {

    render() {
        return (
            <div>
                <div><Header /></div>
                <div>This is the signup page</div>
                <div><Body /></div>
                <div><Footer /></div>
            </div>
        )
    }
}

export default Signup
