'use strict';

var graphql = require("graphql");

var UserType = new graphql.GraphQLObjectType({
    name: 'User',
    fields: {
        id: { type: graphql.GraphQLString },
        name: { type: graphql.GraphQLString },
        profession: { type: graphql.GraphQLString }
    }
});

module.exports = UserType;