'use strict';

var graphql = require("graphql");

var LanguageType = new graphql.GraphQLObjectType({
    name: 'Language',
    fields:{
        id: { type: graphql.GraphQLInt },
        name: { type: graphql.GraphQLString },
    }
});

module.exports = LanguageType;