'use strict';

var graphql = require("graphql");

var EntityTypeType = new graphql.GraphQLObjectType({
    name: 'EntityType',
    fields:{
        id: { type: graphql.GraphQLInt },
        name: { type: graphql.GraphQLString },
    }
});

module.exports = EntityTypeType;