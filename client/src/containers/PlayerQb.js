import React, {Component} from "react"
import NavBar from '../components/NavBar'
import Quarterback from '../components/Quarterback'
import Body from '../components/Body'
import Footer from '../components/Footer'
import helpers from '../../utils/helpers.js'
import Results from '../components/results.js'

var PlayerQb = React.createClass({
    getInitialState: function() {
        return {
            searchTerm: "",
            results: ""
        }
    },

    setTerm: function(term) {
        this.setState({
            searchTerm: term
        })
    },

    componentDidUpdate: function(prevProps, prevState) {
        if(prevState.searchTerm != this.state.searchTerm) {
            console.log("Updated");
            console.log(this.state.searchTerm)

            helpers.nameQuery(this.state.searchTerm)
            .then(function(data) {
                if(data != this.state.results) {
                    console.log("Here")
                    console.log("Data", data)

                    this.setState({
                        results: data
                    })
                }
            }.bind(this))

            helpers.attemptsQuery(this.state.searchTerm)
            .then(function(data) {
                if(data != this.state.results) {
                    console.log("Here")
                    console.log("Data", data)

                    this.setState({
                        results2: data
                    })
                }
            }.bind(this))

            helpers.completionQuery(this.state.searchTerm)
            .then(function(data) {
                if(data != this.state.results) {
                    console.log("Here")
                    console.log("Data", data)

                    this.setState({
                        results3: data
                    })
                }
            }.bind(this))

            helpers.pyardsQuery(this.state.searchTerm)
            .then(function(data) {
                if(data != this.state.results) {
                    console.log("Here")
                    console.log("Data", data)

                    this.setState({
                        results4: data
                    })
                }
            }.bind(this))

            helpers.ptouchdownsQuery(this.state.searchTerm)
            .then(function(data) {
                if(data != this.state.results) {
                    console.log("Here")
                    console.log("Data", data)

                    this.setState({
                        results5: data
                    })
                }
            }.bind(this))

            helpers.interceptionsQuery(this.state.searchTerm)
            .then(function(data) {
                if(data != this.state.results) {
                    console.log("Here")
                    console.log("Data", data)

                    this.setState({
                        results6: data
                    })
                }
            }.bind(this))
        }
    },

    render: function() {
        return (
            <div className="container">

                <div className="row">

                    <div className="jumbotron">
                        <h2 className="text-center">Address Finder!</h2>
                        <p className="text-center"><em>Enter a landmark to search for its exact address (ex: "Eiffel Tower").</em></p>
                    </div>

                    <div className="col-md-6">
                    
                        <Quarterback setTerm={this.setTerm}/>

                    </div>

                    <div className="col-md-6">
                
                        <Results name={this.state.results} 
                                 attempts={this.state.results2} 
                                 completions={this.state.results3}
                                 pyards={this.state.results4}
                                 ptouchdowns={this.state.results5}
                                 interceptions={this.state.results6} />

                    </div>


                </div>

            </div>
        )
    }
})

export default PlayerQb
