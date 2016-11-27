import React, {Component} from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import Body from '../components/Body'

class Login extends Component {

    render() {
        return (
            <div>
                <div><NavBar/></div>
                <div>
                    <div>This is the login page</div>
                    <div><Body/></div>
                </div>
                <div><Footer/></div>
            </div>
        )
    }
}

export default Login
