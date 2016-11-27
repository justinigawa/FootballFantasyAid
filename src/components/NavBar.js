import React, {Component} from "react"
import {Link} from "react-router"

const NavBar = props => (
    <div className="header-dark">
        <nav className="navbar navbar-default navigation-clean-search">
            <div className="container">
                <div className="navbar-header"><a className="navbar-brand navbar-link" href="/">Fantasy Aid</a></div>
                <div className="collapse navbar-collapse" id="navcol-1">
                    <div className="navbar-text navbar-right">
                        <a className="navbar-link-li" href="../Login">Log In</a>
                        <a className="btn btn-default action-button" role="button" href="../Signup">Sign Up</a>
                    </div>
                </div>
            </div>
        </nav>
    </div>
)

export default NavBar
