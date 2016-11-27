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
                    <form className="create-update-form">

                        <div className="form-group">
                            <label for="em">Email:</label>
                            <input type="text" id="em" name="email" placeholder="Email"/></div>

                        <div className="form-group">
                            <label for="pass">Password:</label>
                            <input type="password" id="pass" name="password" placeholder="Password"/></div>

                        <a className="btn btn-default action-button" role="button" href="../">Log In</a>

                    </form>
                    <div><Body/></div>
                </div>
                <div><Footer/></div>
            </div>
        )
    }
}
export default Login
