'use strict';

var graphql = require("graphql");

var AffiliateTierType = new graphql.GraphQLObjectType({
    name: 'AffiliateTier',
    fields:{
        id: { type: graphql.GraphQLInt },
        name: { type: graphql.GraphQLString },
    }
});

module.exports = AffiliateTierType;