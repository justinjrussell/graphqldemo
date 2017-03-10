var Twitter = require('twitter');
var Config = require("../config");

var client = new Twitter({
  consumer_key: Config.twitter.consumer_key,
  consumer_secret: Config.twitter.consumer_secret,
  access_token_key: Config.twitter.access_token_key,
  access_token_secret: Config.twitter.access_token_secret
});
 
module.exports = {
  user_timeline: function(args){
    return new Promise(function(resolve,reject){
      var params = {screen_name: args.screen_name, count:args.count};
      client.get('statuses/user_timeline', params, function(error, tweets, response){
        if (error) throw error;
        resolve({ user_timeline : tweets });
      });
    });
  }
};