import React, {Component} from "react"
import {Link} from "react-router"

const Header = props => (
    <div className="header-dark">
        <nav className="navbar navbar-default navigation-clean-search">
            <div className="container">
                <div className="navbar-header"><a className="navbar-brand navbar-link" href="/">Fantasy Aid</a>
                    <button className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navcol-1"><span className="sr-only">Toggle navigation</span><span className="icon-bar"></span><span className="icon-bar"></span><span className="icon-bar"></span></button>
                </div>
                <div className="collapse navbar-collapse" id="navcol-1">
                    <ul className="nav navbar-nav">
                        <li className="dropdown"><a className="dropdown-toggle" data-toggle="dropdown" aria-expanded="false" href="#">Dropdown <span className="caret"></span></a>
                            <ul className="dropdown-menu" role="menu">
                                <li role="presentation"><a href="#">First Item</a></li>
                                <li role="presentation"><a href="#">Second Item</a></li>
                                <li role="presentation"><a href="#">Third Item</a></li>
                            </ul>
                        </li>
                    </ul>
                    <div className="navbar-text navbar-right">
                        <a className="navbar-link-li" href="../Login">Log In</a>
                        <a className="btn btn-default action-button" role="button" href="../Signup">Sign Up</a>
                    </div>
                </div>
            </div>
        </nav>
    </div>
)

export default Header
