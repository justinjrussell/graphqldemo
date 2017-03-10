'use strict';

var graphql = require("graphql");

var MediaTypeType = new graphql.GraphQLObjectType({
    name: 'MediaType',
    fields:{
        id: { type: graphql.GraphQLInt },
        name: { type: graphql.GraphQLString },
    }
});

module.exports = MediaTypeType;