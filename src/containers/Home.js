import React, {Component} from "react"
import Header from '../components/Header'

class Home extends Component {

    render() {
        return (
            <div>
                <div className="header">
                    <div><Header /></div>
                </div>
                {/* <div className="body">
                    <div><Body /></div>
                </div> */}
            </div>
        )
    }
}

export default Home
