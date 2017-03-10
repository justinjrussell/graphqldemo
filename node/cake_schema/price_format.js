'use strict';

var graphql = require("graphql");

var PriceFormatType = new graphql.GraphQLObjectType({
    name: 'PriceFormat',
    fields:{
        id: { type: graphql.GraphQLInt },
        name: { type: graphql.GraphQLString },
    }
});

module.exports = PriceFormatType;