import React, {Component} from "react"
import {Link} from "react-router"
import axios from 'axios'
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

    handleSubmit: function(event) {
        event.preventDefault()
        this.props.setTerm2(this.state.term)
    },

    render: function() {
        return (
            <div className="searchForms">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="panel panel-default">
                                <div className="panel-heading">
                                    <h3 className="panel-title text-center">Quarterback 2</h3>
                                </div>
                                <div className="panel-body text-center">
                                    <form>
                                        <div className="form-group">
                                            <Child2 changeName={this.handleChange} />
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