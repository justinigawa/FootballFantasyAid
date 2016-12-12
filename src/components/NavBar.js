import React, {Component} from "react"
import {Link} from "react-router"

const NavBar = props => (
    <div className="header-dark">
        <nav className="navbar navbar-default navigation-clean-search">
            <div className="container">
                <div className="navbar-header"><a className="navbar-brand navbar-link" href="/">Fantasy Aid</a></div>
                <div className="collapse navbar-collapse" id="navcol-1">
                    <div className="navbar-text navbar-right">
                        <a className="btn btn-default action-button" role="button" href="../PlayerQb">Quarterback</a>
                        <a className="btn btn-default action-button" role="button" href="../PlayerRb">Running Back</a>
                        <a className="btn btn-default action-button" role="button" href="../PlayerTE">Tight End</a>
                        <a className="btn btn-default action-button" role="button" href="../PlayerWR">Wide Reciever</a>
                    </div>
                </div>
            </div>
        </nav>
    </div>
)

export default NavBar
