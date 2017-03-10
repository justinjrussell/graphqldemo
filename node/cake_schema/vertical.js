'use strict';

var graphql = require("graphql");
var OfferType = require("./offer");
var VerticalCategoryType = require("./vertical_category");
var OfferContractType = require("./offer_contract");
var HistoryType = require("./history");

var VerticalType = new graphql.GraphQLObjectType({
    name: 'Vertical',
    fields:{
        id: { type: graphql.GraphQLInt },
        name: { type: graphql.GraphQLString },
        category: { type: VerticalCategoryType },
        redirect_offer: { type: OfferContractType },
        review_upsells: { type: graphql.GraphQLBoolean },
        notes: { type: graphql.GraphQLString },
        //offers: { type: new graphql.GraphQLList(OfferType) },
        //history: { type: new graphql.GraphQLList(HistoryType) }
    }
});

module.exports = VerticalType;