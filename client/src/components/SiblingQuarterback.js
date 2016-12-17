var React = require('react');

var Sibling = React.createClass({
  render: function () {
	var name = this.props.name;
    
    return (
      <div>
        <h1>Hey, my name is {name}!</h1>
      </div>
    );
  }
});

module.exports = Sibling;