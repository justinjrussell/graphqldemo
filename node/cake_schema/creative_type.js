'use strict';

var graphql = require("graphql");

var CreativeTypeType = new graphql.GraphQLObjectType({
    name: 'CreativeType',
    fields:{
        id: { type: graphql.GraphQLInt },
        name: { type: graphql.GraphQLString },
    }
});

module.exports = CreativeTypeType;