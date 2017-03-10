'use strict';

var graphql = require("graphql");
var StatusType = require("./status");
var AffiliateTierType = require("./affiliate_tier");
var ContactType = require("./contact");
var CampaignType = require("./campaign");
var HistoryType = require("./history");

var AffiliateType = new graphql.GraphQLObjectType({
    name: 'Affiliate',
    fields:{
        id: { type: graphql.GraphQLInt },
        name: { type: graphql.GraphQLString },
        status: { type: StatusType },
        tier: {type: AffiliateTierType },
        manager: { type: ContactType },
        third_party_name: { type: graphql.GraphQLString },
        website:{ type: graphql.GraphQLString },
        street:{ type: graphql.GraphQLString },
        street2:{ type: graphql.GraphQLString },
        city:{ type: graphql.GraphQLString },
        state:{ type: graphql.GraphQLString },
        zip:{ type: graphql.GraphQLString },
        country:{ type: graphql.GraphQLString },
        //campaigns: { type: new graphql.GraphQLList(CampaignType) },
        notes:{ type: graphql.GraphQLString },
        history:{ type: new graphql.GraphQLList(HistoryType) },
    }
});

module.exports = AffiliateType;