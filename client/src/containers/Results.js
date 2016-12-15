import React, {Component} from "react"
import {Link} from "react-router"
import PlayerResults from '../components/PlayerResults'


class Results extends Component {
    render() {
        return (
            <div>
                <div className="body">
                    <div><PlayerResults /></div>
                    <hr />
                </div>
            </div>
        )
    }
}

export default Results
