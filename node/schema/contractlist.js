'use strict';

var graphql = require("graphql");
var ContractType = require("./contract");

var ContractListType = new graphql.GraphQLObjectType({
    name:'ContractList',
    fields:{
        contracts: {type: new graphql.GraphQLList(ContractType)}
    }
});

module.exports = ContractListType;