import React, {Component} from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

class Login extends Component {

    render() {
        return (
            <div>
                <div><Header /></div>
                <div>This is the login page</div>
                <div>Login</div>
                <div><Footer /></div>
            </div>
        )
    }
}

export default Login
