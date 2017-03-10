'use strict';

var graphql = require("graphql");

var MediaType = new graphql.GraphQLObjectType({
    name: 'Media',
    fields: {
        id: { type: graphql.GraphQLString },
        name: { type: graphql.GraphQLString },
    }
});

module.exports = MediaType;
