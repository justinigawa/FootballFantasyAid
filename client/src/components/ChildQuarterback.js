var React = require('react');
var axios = require('axios')

var Child = React.createClass({
  handleChange: function (e) {
    this.setState({name: e.target.value})
  },

  handleSubmit: function(event) {
    event.preventDefault()
    this.getThatShit(this.state.name)
    this.setState({search: ""})
    this.setState({trueName: this.state.name})
  },

  getThatShit: function(query) {
    var url = "http://api.fantasy.nfl.com/v1/players/stats?statType=weekStats&season=2016&week=6&position=QB&format=json"
    axios.get(url)
    .then(function(res) {
      for (var i = 0; i < res.data.players.length; i++) {
        if (res.data.players[i].name == query) {
          console.log(res.data.players[i].name)
        }
      }
    })
    .catch(function(err) {
      console.log(err);
    })
  },
  
  render: function () {
    return (
      <div>
        <input onChange={this.handleChange} type="text" placeholder="Search Quarterback" value={this.search} required />
        <button onClick={this.getThatShit}>Submit</button>
      </div>
    );
  }
});

module.exports = Child;