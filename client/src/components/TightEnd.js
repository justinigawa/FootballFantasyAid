import React, {Component} from "react"
import {Link} from "react-router"

const TightEnd = props => (
    <div className="searchForms">
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <div className="panel panel-default">
                        <div className="panel-heading">
                            <h3 className="panel-title text-center">Tight End 1</h3>
                        </div>
                        <div className="panel-body text-center">
                            <form>
                                <div className="form-group">
                                    <input type="text" className="form-control" id="text" placeholder="Search Tight End" required />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="panel panel-default">
                        <div className="panel-heading">
                            <h3 className="panel-title text-center">Tight End 2</h3>
                        </div>
                        <div className="panel-body text-center">
                            <form>
                                <div className="form-group">
                                    <input type="text" className="form-control" id="text" placeholder="Search Tight End" required />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="seachbtn">
                    <a className="btn btn-default action-button" role="button" href="../Results">Compare Tight Ends</a>
                </div>
            </div>
        </div>
    </div>
)

export default TightEnd
