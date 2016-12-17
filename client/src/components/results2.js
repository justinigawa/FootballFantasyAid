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
		                                	<td>Expected Fantasy Points</td>
		                                	<td>{(parseInt(this.props.pyards2)/25) + (parseInt(this.props.interceptions2)*4) + (-parseInt(this.props.ptouchdowns2))}</td>
		                                </tr>
		                            </table>
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