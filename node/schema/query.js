'use strict';

var graphql = require("graphql");
var contractType = require("./contract");
var contractListType = require("./contractlist");
var twitterUserTimelineType = require("./twitter");
var feedSource = require("./feedsource");
var feedSourceType = feedSource.FeedSourceType;
var categoryEnum = feedSource.CategoryEnum;
var contractData = require("../data/contracts");
var twitterData = require("../data/twitter");
var feedSourceData = require("../data/feedsource");

var query = new graphql.GraphQLObjectType({
    name: 'Query',
    fields:{
        contract:{
            type: contractType,
            args:{
                id:{ type: graphql.GraphQLInt }
            },
            resolve: function(_,args){
                return contractData.getContract(args.id);
            }
        },
        contracts:{
            type: contractListType,
            resolve: function(){
                return contractData.getContractList();
            }
        },
        twitter_user:{
            type: twitterUserTimelineType,
            args:{
                screen_name:{ type: graphql.GraphQLString },
                count:{ type: graphql.GraphQLInt }
             },
            resolve: function(_,args){
                return twitterData.user_timeline(args);
            }
        },
        rss_feeds:{
            type: feedSourceType,
            args:{
                category:{
                    type: categoryEnum
                }
            },
            resolve:function(_,args){
                return feedSourceData(args);
            }
        }
    }
});

module.exports = query;