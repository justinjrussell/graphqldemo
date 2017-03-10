'use strict';

var graphql = require("graphql");
var PriceFormatType = require("./price_format");
var CapIntervalType = require("./cap_interval");

var ContractType = new graphql.GraphQLObjectType({
    name: 'Contract',
    fields:{
        id: { type: graphql.GraphQLInt },
        name: { type: graphql.GraphQLString },
        price_format: { type: PriceFormatType },
        received_percentage: { type: graphql.GraphQLBoolean },
        received_amount: { type: graphql.GraphQLFloat },
        payout: { type: graphql.GraphQLFloat },
        offer_link: { type: graphql.GraphQLString },
        confirmation_page_link: { type: graphql.GraphQLString },
        hidden:{ type: graphql.GraphQLBoolean },
        click_cap:{ type: graphql.GraphQLFloat },
        click_cap_interval: { type: CapIntervalType },
        click_cap_start:{ type: graphql.GraphQLString },
        conversion_cap:{ type: graphql.GraphQLFloat },
        conversion_cap_interval: { type: CapIntervalType },
        conversion_cap_start:{ type: graphql.GraphQLString }
    }
});

module.exports = ContractType;