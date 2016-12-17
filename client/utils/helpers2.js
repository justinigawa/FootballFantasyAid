// Include the axios package for performing HTTP requests (promise based alternative to request)
var axios = require('axios');

// Helper Functions (in this case the only one is runQuery)
var helpers2 = {

	nameQuery: function(location){
		//Figure out the geolocation
		var queryURL = "http://api.fantasy.nfl.com/v1/players/stats?statType=weekStats&season=2016&week=14&position=QB&format=json";

		return axios.get(queryURL)
			.then(function(response){
				for(var i = 0; i < response.data.players.length; i++) {
					if (response.data.players[i].name == location) {
						return response.data.players[i].name
					}
				}
		})

	},

	attemptsQuery: function(location){
		//Figure out the geolocation
		var queryURL = "http://api.fantasy.nfl.com/v1/players/stats?statType=weekStats&season=2016&week=14&position=QB&format=json";

		return axios.get(queryURL)
			.then(function(response){
				for(var i = 0; i < response.data.players.length; i++) {
					if (response.data.players[i].name == location) {
						console.log(response.data.players[i])
						return response.data.players[i].stats[2]
					}
				}
		})

	},

	completionQuery: function(location){
		//Figure out the geolocation
		var queryURL = "http://api.fantasy.nfl.com/v1/players/stats?statType=weekStats&season=2016&week=14&position=QB&format=json";

		return axios.get(queryURL)
			.then(function(response){
				for(var i = 0; i < response.data.players.length; i++) {
					if (response.data.players[i].name == location) {
						return response.data.players[i].stats[3]
					}
				}
		})

	},

	pyardsQuery: function(location){
		//Figure out the geolocation
		var queryURL = "http://api.fantasy.nfl.com/v1/players/stats?statType=weekStats&season=2016&week=14&position=QB&format=json";

		return axios.get(queryURL)
			.then(function(response){
				for(var i = 0; i < response.data.players.length; i++) {
					if (response.data.players[i].name == location) {
						return response.data.players[i].stats[5]
					}
				}
		})

	},

	ptouchdownsQuery: function(location){
		//Figure out the geolocation
		var queryURL = "http://api.fantasy.nfl.com/v1/players/stats?statType=weekStats&season=2016&week=14&position=QB&format=json";

		return axios.get(queryURL)
			.then(function(response){
				for(var i = 0; i < response.data.players.length; i++) {
					if (response.data.players[i].name == location) {
						return response.data.players[i].stats[6]
					}
				}
		})

	},

	interceptionsQuery: function(location){
		//Figure out the geolocation
		var queryURL = "http://api.fantasy.nfl.com/v1/players/stats?statType=weekStats&season=2016&week=14&position=QB&format=json";

		return axios.get(queryURL)
			.then(function(response){
				for(var i = 0; i < response.data.players.length; i++) {
					if (response.data.players[i].name == location) {
						if (response.data.players[i].stats[7] == undefined) {
							return ("0")
						} else {
							return response.data.players[i].stats[7]
						}
					}
				}
		})

	},

	projectPointsQuery: function(location){
		//Figure out the geolocation
		var queryURL = "http://api.fantasy.nfl.com/v1/players/stats?statType=weekStats&season=2016&week=14&position=QB&format=json";

		return axios.get(queryURL)
			.then(function(response){
				for(var i = 0; i < response.data.players.length; i++) {
					if (response.data.players[i].name == location) {
						return response.data.players[i].weekProjectedPts
					}
				}
		})

	}
}

module.exports = helpers2;