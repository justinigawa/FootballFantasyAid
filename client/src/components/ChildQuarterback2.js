var React = require('react');
var axios = require('axios')

var Child2 = React.createClass({
  changeName: function(e) {
    var name = e.target.value;
    this.props.changeName(name);
  },

  render: function () {
    return (
      <div>
        <input onChange={this.changeName} type="text" placeholder="Search Quarterback" value={this.search} required />
      </div>
    );
  }
});

module.exports = Child2;