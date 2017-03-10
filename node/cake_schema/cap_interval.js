'use strict';

var graphql = require("graphql");

var CapIntervalType = new graphql.GraphQLObjectType({
    name: 'CapInterval',
    fields:{
        id: { type: graphql.GraphQLInt },
        name: { type: graphql.GraphQLString },
    }
});

module.exports = CapIntervalType;