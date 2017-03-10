'use strict';

var graphql = require("graphql");

var DepartmentType = new graphql.GraphQLObjectType({
    name: 'Department',
    fields:{
        id: { type: graphql.GraphQLInt },
        name: { type: graphql.GraphQLString },
    }
});

module.exports = DepartmentType;