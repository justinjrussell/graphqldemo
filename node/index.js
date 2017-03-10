'use strict';

var graphqlHTTP = require("express-graphql");
var express = require("express");
//var schema = require("./schema/schema");
var schema = require("./cake_schema/schema");

console.log('Server online!');
express().use('/graphql', graphqlHTTP({ schema: schema, pretty: true, graphiql: true })).listen(8081);
