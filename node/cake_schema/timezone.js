'use strict';

var graphql = require("graphql");

var TimezoneType = new graphql.GraphQLObjectType({
    name: 'Timezone',
    fields:{
        id: { type: graphql.GraphQLInt },
        name: { type: graphql.GraphQLString },
    }
});

module.exports = TimezoneType;