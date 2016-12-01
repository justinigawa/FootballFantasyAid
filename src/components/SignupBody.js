import React, {Component} from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import Body from '../components/Body'

class Signup extends Component {

    render() {
        return (
            <div>
                <div><NavBar/></div>
                <div className="registration">
                    <form className="create-update-form">

                        <div className="form-group">
                            <label for="em">User Name:</label>
                            <input type="text" id="em" name="username" placeholder="Username"/></div>

                        <div className="form-group">
                            <label for="em">Email:</label>
                            <input type="text" id="em" name="email" placeholder="Email"/></div>

                        <div className="form-group">
                            <label for="pass">Password:</label>
                            <input type="password" id="pass" name="password" placeholder="Password"/></div>

                        <a className="btn btn-default action-button" role="button" href="/">Sign Up</a>

                    </form>
                </div>
                <div><Body/></div>
                <div><Footer/></div>
            </div>
        )
    }
}

export default Signup
