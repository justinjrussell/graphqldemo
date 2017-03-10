'use strict';

var graphql = require("graphql");
var AdvertiserType = require("./advertiser");
var AffiliateType = require("./affiliate");
var CampaignType = require("./campaign");
var ContactType = require("./contact");
var CreativeType = require("./creative");
var OfferType = require("./offer");
var VerticalType = require("./vertical");

var query = new graphql.GraphQLObjectType({
    name: 'Query',
    fields:{
        advertiser:{
            type: AdvertiserType,
            args:{
                id:{ type: graphql.GraphQLInt }
            },
            resolve: function(_,args){
                return {id : 1};
            }
        },
        affiliate:{
            type: AffiliateType,
            args:{
                id:{ type: graphql.GraphQLInt }
            },
            resolve: function(_,args){
                return {id : 1};
            }
        },
        campaign:{
            type: CampaignType,
            args:{
                id:{ type: graphql.GraphQLInt }
            },
            resolve: function(_,args){
                return {id : 1};
            }
        },
        contact:{
            type: ContactType,
            args:{
                id:{ type: graphql.GraphQLInt }
            },
            resolve: function(_,args){
                return {id : 1};
            }
        },
        creative:{
            type: CreativeType,
            args:{
                id:{ type: graphql.GraphQLInt }
            },
            resolve: function(_,args){
                return {id : 1};
            }
        },
        offer:{
            type: OfferType,
            args:{
                id:{ type: graphql.GraphQLInt }
            },
            resolve: function(_,args){
                return {id : 1};
            }
        },
        vertical:{
            type: VerticalType,
            args:{
                id:{ type: graphql.GraphQLInt }
            },
            resolve: function(_,args){
                return {id : 1};
            }
        }
    }
});

module.exports = query;