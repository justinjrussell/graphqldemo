'use strict';

var graphql = require("graphql");

var CreditLimitOptionType = new graphql.GraphQLObjectType({
    name: 'CreditLimitOption',
    fields:{
        id: { type: graphql.GraphQLInt },
        name: { type: graphql.GraphQLString },
    }
});

module.exports = CreditLimitOptionType;