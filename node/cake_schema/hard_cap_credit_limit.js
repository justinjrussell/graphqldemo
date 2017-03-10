'use strict';

var graphql = require("graphql");

var HardCapCreditLimitType = new graphql.GraphQLObjectType({
    name: 'HardCapCreditLimit',
    fields:{
        id: { type: graphql.GraphQLInt },
        name: { type: graphql.GraphQLString },
    }
});

module.exports = HardCapCreditLimitType;