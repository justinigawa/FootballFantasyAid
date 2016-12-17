import React, {Component} from "react"
import {Link} from "react-router"
import axios from 'axios'
import Child from './ChildQuarterback.js'
import Child2 from './ChildQuarterback2.js'

var arr = [];

var Quarterback = React.createClass({
    getInitialState: function() {
        return { name: "" }

    },

    handleChange: function(event) {
        var newState = {};
        this.setState({ term: event})
    },

    handleChange2: function(event) {
        var newState = {};
        this.setState({ term2: event})
    },

    handleSubmit: function(event) {
        event.preventDefault()
        this.props.setTerm(this.state.term, this.state.term2)
    },

    render: function() {
        return (
            <div className="searchForms">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="panel panel-default">
                                <div className="panel-heading">
                                    <h3 className="panel-title text-center">Quarterback 1</h3>
                                </div>
                                <div className="panel-body text-center">
                                    <form>
                                        <div className="form-group">
                                            <Child changeName={this.handleChange} />
                                            <Child2 changeName={this.handleChange2} />
                                            <button onClick={this.handleSubmit}>Submit</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});

export default Quarterback
