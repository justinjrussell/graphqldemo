'use strict';

var graphql = require("graphql");

var StatusType = new graphql.GraphQLObjectType({
    name: 'Status',
    fields:{
        id: { type: graphql.GraphQLInt },
        name: { type: graphql.GraphQLString },
    }
});

module.exports = StatusType;