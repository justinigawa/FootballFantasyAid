//when importing components {} it has to be capitalized
import React, {Component} from "react"
import {Link} from "react-router"

//stateless functional Component
const NavBar = props => (
    <nav className="navbar navbar-default">
        <div className="container-fluid">
            <div className="navbar-header">
                <a className="navbar-brand" href="#">NAV BAR</a>
            </div>

            <div className="nav navbar-nav navbar-right">
                <Link to="/">
                    <p>Home</p>
                </Link>
                <Link to="/Giphy">
                    <p>Giphy</p>
                </Link>
                <form onSubmit={props.handleSubmit} className="navbar-form navbar-left">

                    {props.show
                        ? <div className="form-group"><input onChange={props.handleChange} className="form-control" placeholder="Search" value={props.search}/>
                                <button type="submit" className="btn btn-default">Submit</button>
                            </div>
                        : null}

                </form>
            </div>
        </div>
    </nav>
)

export default NavBar
