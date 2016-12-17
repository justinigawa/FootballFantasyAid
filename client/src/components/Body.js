import React, {Component} from "react"
import {Link} from "react-router"
import ReactDOM from "react-dom"

const Body = props => (
    <div className="container hero">
        <div className="row">
            <div className="col-md-8 col-md-offset-2">
                <div className="embed-responsive embed-responsive-16by9">
                    <iframe className="embed-responsive-item"></iframe>

                </div>
            </div>
        </div>
    </div>
)

export default Body
