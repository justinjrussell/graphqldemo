'use strict';

var graphql = require("graphql");

var BillingCycleType = new graphql.GraphQLObjectType({
    name: 'BillingCycle',
    fields:{
        id: { type: graphql.GraphQLInt },
        name: { type: graphql.GraphQLString },
    }
});

module.exports = BillingCycleType;