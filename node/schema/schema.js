"use strict";

var graphql = require("graphql");
var query = require("./query");

var schema = new graphql.GraphQLSchema({
    query: query
});

module.exports = schema;