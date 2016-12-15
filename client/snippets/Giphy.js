import React, {Component} from "react"
import NavBar from '../components/NavBar'
import axios from 'axios';

//creating a class called Giphy, and extending Component from react
class Giphy extends Component {

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
            this.getThatShit(this.state.search);
            this.setState({search: ""})
        }

        getThatShit(giphy){
            const url = `http://api.giphy.com/v1/gifs/search?q=${giphy}&api_key=dc6zaTOxFJmzC`;
            console.log(url);
            axios.get(url)
            .then( res => {
            console.log('res', res)
            })
            .catch(err => console.log(err));
        }

        render() {
            return (
                <div>
                    <div><NavBar
                        show={true}
                        handleChange={this.handleChange.bind(this)}
                        search={this.state.search}
                        handleSubmit={this.handleSubmit.bind(this)}/>
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


export default Giphy
