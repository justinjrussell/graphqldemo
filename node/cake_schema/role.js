'use strict';

var graphql = require("graphql");

var RoleType = new graphql.GraphQLObjectType({
    name: 'Role',
    fields:{
        id: { type: graphql.GraphQLInt },
        name: { type: graphql.GraphQLString },
    }
});

module.exports = RoleType;