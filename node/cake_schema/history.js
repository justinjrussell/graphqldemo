'use strict';

var graphql = require("graphql");
var EntityTypeType = require("./entity_type");
var ContactType = require("./contact");

var HistoryType = new graphql.GraphQLObjectType({
    name: 'History',
    fields:{
        id: { type: graphql.GraphQLInt },
        name: { type: graphql.GraphQLString },
        entity_type: { type: EntityTypeType },
        summary: { type: graphql.GraphQLString },
        user: { type: ContactType },
        date: { type: graphql.GraphQLString },
        notes:{ type: graphql.GraphQLString }
    }
});

module.exports = HistoryType;