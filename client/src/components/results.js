// Include React 
var React = require('react');

// This is the main component. It includes the banner and Results element.
var Results = React.createClass({

	// Here we render the function
	render: function(){

		return(

			<div className="searchForms">
		        <div className="container">
		            <div className="row">
		                <div className="col-md-6">
		                    <div className="panel panel-default">
		                        <div className="panel-heading">
		                            <h3 className="panel-title text-center">{this.props.name} Last Week</h3>
		                        </div>
		                        <div className="panel-body text-center">
		                            <table className="table table-bordered table-hovered">
		                                <tr>
		                                    <td>Completions/Attempts</td>
		                                    <td>{this.props.completions} / {this.props.attempts}</td>
		                                </tr>
		                                <tr>
		                                	<td>Pass Yards</td>
		                                	<td>{this.props.pyards}</td>
		                                </tr>
		                                <tr>
		                                	<td>Pass Touchdowns</td>
		                                	<td>{this.props.ptouchdowns}</td>
		                                </tr>
		                                <tr>
		                                	<td>Interceptions</td>
		                                	<td>{this.props.interceptions}</td>
		                                </tr>
		                                <tr>
		                                	<td>Previous Week Fantasy Points</td>
		                                	<td>{(parseInt(this.props.pyards)/25) + (parseInt(this.props.interceptions)*4) + (-parseInt(this.props.ptouchdowns))}</td>
		                                </tr>
		                            </table>
		                        </div>
		                    </div>
		                </div>
		                <div className="col-md-6">
		                    <div className="panel panel-default">
		                        <div className="panel-heading">
		                            <h3 className="panel-title text-center">{this.props.name2} Last Week</h3>
		                        </div>
		                        <div className="panel-body text-center">
		                            <table className="table table-bordered table-hovered">
		                                <tr>
		                                    <td>Completions/Attempts</td>
		                                    <td>{this.props.completions2} / {this.props.attempts2}</td>
		                                </tr>
		                                <tr>
		                                	<td>Pass Yards</td>
		                                	<td>{this.props.pyards2}</td>
		                                </tr>
		                                <tr>
		                                	<td>Pass Touchdowns</td>
		                                	<td>{this.props.ptouchdowns2}</td>
		                                </tr>
		                                <tr>
		                                	<td>Interceptions</td>
		                                	<td>{this.props.interceptions2}</td>
		                                </tr>
		                                <tr>
		                                	<td>Previous Week Fantasy Points</td>
		                                	<td>{(parseInt(this.props.pyards2)/25) + (parseInt(this.props.interceptions2)*4) + (-parseInt(this.props.ptouchdowns2))}</td>
		                                </tr>
		                            </table>
		                        </div>
		                    </div>
		                </div>
		            </div>
		            <div className="row">
		                <div className="col-md-6">
		                    <div className="panel panel-default">
		                        <div className="panel-body text-left">
		                            <h3 className="panel-title text-center">Our analysis predicts {this.props.name} to get {this.props.proPts} points.</h3>
		                        </div>		                        
		                    </div>
		                </div>
		                <div className="col-md-6">
		                    <div className="panel panel-default">
		                        <div className="panel-body text-left">
		                            <h3 className="panel-title text-center">Our analysis predicts {this.props.name2} to get {this.props.proPts2} points.</h3>
		                        </div>		                        
		                    </div>
		                </div>
		            </div>
		        </div>
		    </div>

		)
	}
});

// Export the componen back for use in other files
module.exports = Results;