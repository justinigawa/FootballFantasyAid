import React, {Component} from "react"
import {Link} from "react-router"
import axios from 'axios'
import Sibling from './SiblingQuarterback.js'
import Child from './ChildQuarterback.js'

var arr = [];

var Quarterback = React.createClass({
    getInitialState: function() {
        return { name: "" }
    },

    handleChange: function(event) {
        var newState = {};
        var term = event.target.value;
        this.setState({ term: term})
    },

    handleSubmit: function(event) {
        event.preventDefault()
        this.props.setTerm(this.state.term)
    },

    render: function() {
        return (
            <div className="searchForms">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="panel panel-default">
                                <div className="panel-heading">
                                    <h3 className="panel-title text-center">Quarterback 1</h3>
                                </div>
                                <div className="panel-body text-center">
                                    <form>
                                        <div className="form-group">
                                            <input onChange={this.handleChange} type="text" placeholder="Search Quarterback" value={this.search} required />
                                            <button onClick={this.handleSubmit}>Submit</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-offset-4">
                            <button type="submit" className="btn btn-default">Compare Quarterbacks</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});

export default Quarterback
