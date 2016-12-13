import React, {Component} from "react"
import {Link} from "react-router"
import axios from 'axios';
import Quarterback from './Quarterback';

class Results extends Component {

        constructor(props) {
            super(props)
            this.state = {
                search: ""
            }
        }

        handleChange(event) {
            this.setState({search: event.target.value})
        }

        handleSubmit(event) {
            event.preventDefault() //so that it doesn't do a post request
            this.getThatQB(this.state.search)
            this.setState({search: ""})
        }

        getThatQB(giphy){
            const url = `http://api.giphy.com/v1/gifs/search?q=${giphy}&api_key=dc6zaTOxFJmzC`
            console.log(url)
            axios.get(url)
            .then( res => {
            console.log('res', res)
            })
            .catch(err => console.log(err))
        }

        render() {
            return (
                <div>PlayerResults.js
                    <div>
                        <Quarterback
                        show={true}
                        handleChange={this.handleChange.bind(this)}
                        search={this.state.search}
                        handleSubmit={this.handleSubmit.bind(this)} />
                    </div>
                    <div>
                        <div className="giphy"></div>
                    </div>
                    {/* binding contents of the handleChange allows you to use "this"
                    passing handleChange as a prop */}
                    {/* <div><Footer/></div> */}
                </div>
            )
        }
}

// backup of const Results = props
// const Results = props => (
//     <div className="searchForms">
//         <div className="container">
//             <div className="row">
//                 <div className="col-md-6">
//                     <div className="panel panel-default">
//                         <div className="panel-heading">
//                             <h3 className="panel-title text-center">Player 1</h3>
//                         </div>
//                         <div className="panel-body text-center">
//                         </div>
//                     </div>
//                 </div>
//                 <div className="col-md-6">
//                     <div className="panel panel-default">
//                         <div className="panel-heading">
//                             <h3 className="panel-title text-center">Player 2</h3>
//                         </div>
//                         <div className="panel-body text-center">
//                         </div>
//                     </div>
//                 </div>
//             </div>

//         </div>
//     </div>
// )

export default Results
