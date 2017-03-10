'use strict';

var graphql = require("graphql");

var OfferContractType = new graphql.GraphQLObjectType({
    name: 'OfferContract',
    fields:{
        id: { type: graphql.GraphQLInt },
        name: { type: graphql.GraphQLString },
    }
});

module.exports = OfferContractType;