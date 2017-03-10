'use strict';

var graphql = require("graphql");

var LinkTypeType = new graphql.GraphQLObjectType({
    name: 'LinkType',
    fields:{
        id: { type: graphql.GraphQLInt },
        name: { type: graphql.GraphQLString },
    }
});

module.exports = LinkTypeType;