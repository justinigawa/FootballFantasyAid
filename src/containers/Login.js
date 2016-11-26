import React, {Component} from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Body from '../components/Body'

class Login extends Component {

    render() {
        return (
            <div>
                <div><Header/></div>
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
