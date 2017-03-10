'use strict';

var graphql = require("graphql");

var VerticalCategoryType = new graphql.GraphQLObjectType({
    name: 'VerticalCategory',
    fields:{
        id: { type: graphql.GraphQLInt },
        name: { type: graphql.GraphQLString },
    }
});

module.exports = VerticalCategoryType;