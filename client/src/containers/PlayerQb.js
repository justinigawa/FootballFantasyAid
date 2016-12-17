import React, {Component} from "react"
import NavBar from '../components/NavBar'
import Quarterback from '../components/Quarterback'
import Body from '../components/Body'
import Footer from '../components/Footer'
import helpers from '../../utils/helpers.js'
import Results from '../components/results.js'
import Quarterback2 from '../components/Quarterback2'
import helpers2 from '../../utils/helpers2.js'
import Results2 from '../components/results2.js'

var PlayerQb = React.createClass({
    getInitialState: function() {
        return {
            searchTerm: "",
            results: "",
            searchTerm2: ""
        }
    },

    setTerm: function(term, term2) {
        this.setState({
            searchTerm: term
        })
        this.setState({
            searchTerm2: term2
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

            helpers.projectPointsQuery(this.state.searchTerm)
            .then(function(data) {
                if(data != this.state.results) {
                    console.log("Here")
                    console.log("Data", data)

                    this.setState({
                        results7: data
                    })
                }
            }.bind(this))

            helpers2.nameQuery(this.state.searchTerm2)
            .then(function(data) {
                if(data != this.state.results) {
                    console.log("Here")
                    console.log("Data2", data)

                    this.setState({
                        results11: data
                    })
                }
            }.bind(this))

            helpers2.attemptsQuery(this.state.searchTerm2)
            .then(function(data) {
                if(data != this.state.results) {
                    console.log("Here")
                    console.log("Data2", data)

                    this.setState({
                        results12: data
                    })
                }
            }.bind(this))

            helpers2.completionQuery(this.state.searchTerm2)
            .then(function(data) {
                if(data != this.state.results) {
                    console.log("Here")
                    console.log("Data2", data)

                    this.setState({
                        results13: data
                    })
                }
            }.bind(this))

            helpers2.pyardsQuery(this.state.searchTerm2)
            .then(function(data) {
                if(data != this.state.results) {
                    console.log("Here")
                    console.log("Data2", data)

                    this.setState({
                        results14: data
                    })
                }
            }.bind(this))

            helpers2.ptouchdownsQuery(this.state.searchTerm2)
            .then(function(data) {
                if(data != this.state.results) {
                    console.log("Here")
                    console.log("Data2", data)

                    this.setState({
                        results15: data
                    })
                }
            }.bind(this))

            helpers2.interceptionsQuery(this.state.searchTerm2)            .then(function(data) {
                if(data != this.state.results) {
                    console.log("Here")
                    console.log("Data2", data)

                    this.setState({
                        results16: data
                    })
                }
            }.bind(this))

            helpers2.projectPointsQuery(this.state.searchTerm2)            .then(function(data) {
                if(data != this.state.results) {
                    console.log("Here")
                    console.log("Data2", data)

                    this.setState({
                        results17: data
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

                    <div className="col-md-12">
                    
                        <Quarterback setTerm={this.setTerm}/>

                    </div>

                    <div className="col-md-12">
                
                        <Results name={this.state.results} 
                                 attempts={this.state.results2} 
                                 completions={this.state.results3}
                                 pyards={this.state.results4}
                                 ptouchdowns={this.state.results5}
                                 interceptions={this.state.results6}
                                 proPts={this.state.results7}
                                 name2={this.state.results11} 
                                 attempts2={this.state.results12} 
                                 completions2={this.state.results13}
                                 pyards2={this.state.results14}
                                 ptouchdowns2={this.state.results15}
                                 interceptions2={this.state.results16}
                                 proPts2={this.state.results17}
                                  />

                    </div>

                </div>

            </div>
        )
    }
})

export default PlayerQb
