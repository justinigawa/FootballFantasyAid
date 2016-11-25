import React, {Component} from "react"
import Header from '../components/Header'
import Body from '../components/Body'
import Footer from '../components/Footer'

class Home extends Component {

    render() {
        return (
            <div>
                <div className="header">
                    <div><Header /></div>
                </div>
                <div className="body">
                    <div><Body /></div>
                </div>
                <div className="footer">
                    <div><Footer /></div>
                </div>
            </div>
        )
    }
}

export default Home
