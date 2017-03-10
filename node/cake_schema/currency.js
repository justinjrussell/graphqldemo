'use strict';

var graphql = require("graphql");

var CurrencyType = new graphql.GraphQLObjectType({
    name: 'Currency',
    fields:{
        id: { type: graphql.GraphQLInt },
        name: { type: graphql.GraphQLString },
    }
});

module.exports = CurrencyType;