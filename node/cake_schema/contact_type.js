'use strict';

var graphql = require("graphql");

var ContactTypeType = new graphql.GraphQLObjectType({
    name: 'ContactType',
    fields:{
        id: { type: graphql.GraphQLInt },
        name: { type: graphql.GraphQLString },
    }
});

module.exports = ContactTypeType;